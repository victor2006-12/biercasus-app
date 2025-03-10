<?php

namespace App\Http\Controllers\Api;

use App\Models\Beer;
use App\Models\Rating;
use App\Models\Like;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
class ApiBeerController extends Controller {

    public function index() {
        return Beer::with('likes')->get();
    }
    
    
    public function rateBeer(Request $request, $id) {
        $request->validate([
            'rating' => 'required|integer|min:1|max:5'
        ]);
    
        Like::updateOrCreate(
            ['gebruikers_id' => auth()->id(), 'bier_id' => $id], // gebruikers_id corrigeren
            ['rating' => $request->rating]
        );
        
    
        return response()->json(['message' => 'Rating opgeslagen']);
    }
    

    
}

