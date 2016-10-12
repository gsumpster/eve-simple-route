import data from "./data.json";

function find_path(G, A, B, M=50000){
	var P = [];
	var V = {};
	var R = [A];

	while (R.length > 0 && M > 0) {
		M--;
		var X = R.shift();
		for (var Y in G[X]) {
			Y = G[X][Y];
			if(Y == B){

				P.push(B);
				P.push(X);
				while (V[X] != A) {
					P.push(V[X]);
					X = V[X];
				}
				P.push(A);
				return P.reverse();
			}
			if(!(Y in V)){
				V[Y] = X;
				R.push(Y);
			}
		}
	}
	return P;
}



export default function(to, from, secure) {

	var route = [];
	var jumps = 0;

	route = find_path(data, to, from);
	jumps = route.length;
	return {jumps, route};
}
