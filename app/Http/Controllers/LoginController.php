<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function view()
    {
        return Inertia::render('login');
    }

    public function login(Request $request)
    {
        // Step 1: Validate input
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        // Step 2: Attempt authentication
        $credentials = $request->only('email', 'password');
        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            return response()->json(['message' => 'Login successful'], 200);
        }

        // Step 3: Handle authentication failure
        return response()->json([
            'errors' => ['email' => 'Invalid credentials']
        ], 422);  // 422 is used when validation fails
    }




    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json(['message' => 'Logged out successfully'], 200);
    }
}
