<?php

namespace App\Http\Controllers;

use App\Models\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class ApplicationController extends Controller
{
    public function view()
    {
        $applications = Application::where('user_id', Auth::id())->get();
        return Inertia::render('job-application', [
            'applications' => $applications
        ]);
    }

    public function store(Request $request)
    {
        // Validate the incoming request data
        $validator = Validator::make($request->all(), [
            'job_title' => 'required|string|max:255',
            'company_name' => 'required|string|max:255',
            'job_link' => 'required|string|url',
            'application_date' => 'required|date',
            'stage' => 'required|numeric|max:255',
            'interview_date' => 'nullable|date_format:Y-m-d H:i:s',
            'salary' => 'required|numeric'
        ]);

        if ($validator->fails()) {
            return response()->json(['success' => false, 'errors' => $validator->errors()]);
        }

        // Save the job application with the current user's ID
        $application = Application::create([
            'user_id' => Auth::id(),
            'job_title' => $request->job_title,
            'company_name' => $request->company_name,
            'job_link' => $request->job_link,
            'application_date' => $request->application_date,
            'stage' => $request->stage,
            'interview_date' => $request->interview_date,
            'status' => $request->status,
            'salary' => $request->salary
        ]);

        return response()->json(['success' => true, 'message' => 'Application added', 'application' => $application]);
    }

    public function delete(Request $request, $id) {
        $application = Application::find($id);

        if(!$application){
            return response()->json(['success' => false, 'error' => 'This application doesn\'t exist.']);
        }

        $application->delete();

        return response()->json(['success' => true]);
    }

    public function viewOne($id)
    {
        $application = Application::find($id);
        if ($application) {
            return response()->json(['application' => $application]);
        }
        return response()->json(['error' => 'Application not found'], 404);
    }

}


