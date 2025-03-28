<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class VerifierController extends Controller
{
    public function index()
    {
        $users = User::whereIn('role', ['Verifier'])->get(); // You can also add pagination here if needed
        return response()->json($users);
    }

    public function store(Request $request)
    {
        // Validate incoming request
        $validator = Validator::make($request->all(), [
            'firstname' => 'required|string|max:255',
            'middlename' => 'nullable|string|max:255',
            'lastname' => 'required|string|max:255',
            'suffix' => 'nullable|string|max:10',
            'email' => 'required|email|unique:users,email',
            'role' => 'required|string',
            'brgy' => 'nullable|string',
            'password' => 'required|min:6|confirmed',
            'status' => 'required|string|max:10',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Create user
        $user = User::create([
            'firstname' => $request->firstname,
            'lastname' => $request->lastname,
            'middlename' => $request->middlename,
            'suffix' => $request->suffix,
            'email' => $request->email,
            'role' => $request->role,
            'brgy' => $request->brgy,
            'password' => Hash::make($request->password),
            'status' => $request->status,
        ]);

        return response()->json(['message' => 'User created successfully!', 'user' => $user], 201);
    }
}
