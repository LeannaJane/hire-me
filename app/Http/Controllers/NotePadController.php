<?php

namespace App\Http\Controllers;

use App\Models\Notepad;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class NotePadController extends Controller
{
    public function view()
    {
        $notes = Notepad::where('user_id', Auth::id())->get();
        return Inertia::render('notepad', [
            'notes' => $notes
        ]);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string',
            'content' => 'string'
        ]);

        if ($validator->fails()) {
            return response()->json(['success' => false, 'errors' => $validator->errors()]);
        }

        $notepad = Notepad::create([
            'user_id' => Auth::id(),
            'title' => $request->get('title'),
            'content' => $request->get('content')
        ]);

        return response()->json(['success' => true, 'message' => 'Note created successfully', 'note' => $notepad]);
    }
}
