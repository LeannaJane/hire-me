<?php

use App\Http\Controllers\ApplicationController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterController;
use Illuminate\Support\Facades\Route;

Route::get("/login", [LoginController::class, "view"])->name('login');
Route::get("/register", [RegisterController::class, "view"])->name('register');

Route::post('/register', [RegisterController::class, 'store'])->name('register');
Route::post('/login', [LoginController::class, 'login']);

// Middleware protects the dashboard and other routes from the dashboard from unauthorised users.
Route::middleware([/*'auth',*/ 'inertia'])->group(function () {
    Route::get("/dashboard", [DashboardController::class, "view"]);
    Route::get("/job-application", [ApplicationController::class, "view"]);
});
