<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Models\User;

class RegisterController extends Controller
{
    public function view()
    {
        return Inertia::render('register');
    }

    // Step 1: Validate the user request data.
    public function store(Request $request)
    {
        // Step 1: Validate the incoming request data
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:6',
            'name' => 'required|string|max:255',
        ]);

        // Step 2: Handle validation failure
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Step 3: Create the user.
        $user = User::create([
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'name' => $request->name,
        ]);

        // Step 4: Return a success response in console.
        return response()->json(['message' => 'User registered successfully'], 201);
    }




}
