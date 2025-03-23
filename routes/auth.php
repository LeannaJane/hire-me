<?php

use App\Http\Controllers\ApplicationController;
use App\Http\Controllers\CalendarController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\NotePadController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\SettingsController;
use Illuminate\Support\Facades\Route;

Route::get("/login", [LoginController::class, "view"])->middleware('guest')->name('login');
Route::get("/register", [RegisterController::class, "view"])->middleware('guest')->name('register');

Route::post('/register', [RegisterController::class, 'store'])->middleware('guest')->name('register.action');
Route::post('/login', [LoginController::class, 'login'])->middleware('guest')->name('login.action');

// Middleware protects the dashboard and other routes from the dashboard from unauthorised users.
Route::middleware(['auth', 'inertia'])->group(function () {
    Route::get("/dashboard", [DashboardController::class, "view"]);
    Route::get("/job-application", [ApplicationController::class, "view"])->name('job.application');
    Route::post("/job-application", [ApplicationController::class, "store"])->name('job.application.store');
    Route::delete('/job-application/{id}', [ApplicationController::class, 'delete']);
    Route::get('/job-application/{id}', [ApplicationController::class, 'viewOne']);
    Route::get("/calendar", [CalendarController::class, "view"]);
    Route::get("/notepad", [NotePadController::class, "view"]);
    Route::post("/notepad", [NotePadController::class, "store"]);
    Route::get("/settings", [SettingsController::class, "view"]);
});
