<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Like;
class Beer extends Model {
    use HasFactory;

    public function index() {
        return Beer::with('likes')->get();
    }
    public function averageRating() {
        return $this->likes()->avg('rating');
    }
    
    
    
}
