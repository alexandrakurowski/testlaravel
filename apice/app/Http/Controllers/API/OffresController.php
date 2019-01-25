<?php 
namespace App\Http\Controllers\API; use App\Http\Controllers\Controller; use Request;
use App\Models\Cafe;

/** l7 va chercher toutes les offres.
 * 
 * l8 renvoi données au format json 
 * 
 * appel methode via vueJs = retour json
 */
class OffresController extends Controller { 
    public function getOffres(){ 
        $offres = Offres::all(); 
            return response()->json( $offres );
    }

    public function getOffres( $id ){ 
        $offre = Offres::where('id', '=', $id)->first();
         return response()->json( $offre );
    }
}