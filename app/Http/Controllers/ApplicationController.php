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
            return response()->json(['success' => true, 'application' => $application]);
        }
        return response()->json(['success' => false, 'error' => 'Application not found']);
    }

    public function updateApplication(Request $request)
    {
        $application = Application::find($request->id);

        if (! $application) {
            return response()->json(['success' => false, 'error' => 'Application not found']);
        }

        $application->job_title = $request->get('job_title');
        $application->company_name = $request->get('company_name');
        $application->salary = $request->get('salary');
        $application->application_date = $request->get('application_date');
        $application->stage = $request->get('stage');
        $application->job_link = $request->get('job_link');
        $application->interview_date = $request->get('interview_date');
        $application->save();

        return response()->json(['success' => true, 'message' => 'Application updated', 'application' => $application]);
    }

    public function getInterviewEvents()
    {
        $applications = Application::whereNotNull('interview_date')
            ->where('user_id', Auth::id())
            ->get();

        $events = $applications->map(function ($application) {
            return [
                'id' => $application->id,
                'title' => "Interview at " . $application->company_name,
                'start' => $application->interview_date,
                'end' => $application->interview_date,
                'company' => $application->company_name,
            ];
        });

        return response()->json($events);
}


}


