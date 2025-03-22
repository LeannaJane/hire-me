<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class NotePadController extends Controller
{
    public function view()
    {
        return Inertia::render('notepad');
    }
}
