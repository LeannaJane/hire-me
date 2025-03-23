<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Spreadsheet;

class SpreadsheetController extends Controller
{
    public function store(Request $request)
    {
        // Validate the incoming request data
        $request->validate([
            'spreadsheet_data' => 'required|array',
        ]);

        // Save the spreadsheet data for the current user
        Spreadsheet::create([
            'user_id' => Auth::id(),
            'spreadsheet_data' => json_encode($request->spreadsheet_data),
        ]);

        // Redirect with a success message
        return redirect()->route('spreadsheet.index')->with('success', 'Spreadsheet data saved!');
    }
}
