<?php

namespace App\Http\Controllers\Api;

use App\Models\Beer;
use App\Models\Rating;
use App\Models\Like;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
class ApiBeerController extends Controller {

    public function index() {
        return Beer::with('ratings')->get();
    }
    
    public function rateBeer(Request $request, $id) {
        $request->validate([
            'rating' => 'required|integer|min:1|max:5'
        ]);
    
        Like::updateOrCreate(
            ['user_id' => auth()->id(), 'beer_id' => $id],
            ['rating' => $request->rating]
        );
    
        return response()->json(['message' => 'Rating opgeslagen']);
    }
    

    
}

