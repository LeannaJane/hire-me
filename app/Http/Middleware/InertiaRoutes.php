<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;

class InertiaRoutes
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        Inertia::share('routes', [
            ['url' => '/dashboard', 'label' => 'Dashboard', 'isActive' => false],
            ['url' => '/job-application', 'label' => 'Job Applications', 'isActive' => false],
            ['url' => '/job-application', 'label' => 'Calendar', 'isActive' => false],
            ['url' => '/job-application', 'label' => 'Notepad', 'isActive' => false],
        ]);

        Inertia::share('user', Auth::user());

        return $next($request);
    }
}
