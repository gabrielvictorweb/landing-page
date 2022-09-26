<?php

namespace App\Http\Controllers;

use App\Mail\ContactMail;
use Exception;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends BaseController
{
    public function send(Request $request)
    {
        try{
            $data = $request->input();

            $validator = Validator::make($data, [
                'subject' => 'required',
                'email' => 'required|email',
                'name' => 'required',
                'text' => 'required'
            ]);

            if ($validator->fails()) {
                return response()->json(['errors' => $validator->errors()->all()], 400);
            }

            Mail::to($data['email'])->send((new ContactMail($data)));

            return response()->json([], 201);
        } catch (\Exception $e) {
            return response()->json(['error' => 'INTERNAL_ERROR'], 500);
        }
    }
}
