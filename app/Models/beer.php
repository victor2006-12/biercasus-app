<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Like;
class Beer extends Model {
    use HasFactory;

    public function likes() {
        return $this->hasMany(Like::class, 'bier_id');
    }
}

