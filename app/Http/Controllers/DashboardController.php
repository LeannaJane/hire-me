<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class DashboardController extends Controller
{

    public function view()
    {

        /**
         * Inertia::render('dashboard', [
         *   'jobs' => Job::all()
         *   ];
         */
        return Inertia::render('dashboard');
    }
}
