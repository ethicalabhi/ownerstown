

keysMap = [];
keysMap[0] = ["0"];
keysMap[1] = ["#"];
keysMap[2] = ["A","B","C"];
keysMap[3] = ["D","E","F"];
keysMap[4] = ["G","H","I"];
keysMap[5] = ["J","K","L"];
keysMap[6] = ["M","N","0"];
keysMap[7] = ["P","Q","R","S"];
keysMap[8] = ["T","U","V"];
keysMap[9] = ["W","X","Y","Z"];

var log = {
    getDictionary: function () { 
        var dictionary = [
            "SUPERMAN", 
            "THOR", 
            "ROBIN", 
            "IRONMAN",
            "GHOSTRIDER",
            "CAPTAINAMERICA",
            "FLASH",
            "WOLVERINE",
            "BATMAN",
            "HULK",
            "BLADE",
            "PHANTOM",
            "SPIDERMAN",
            "BLACKWIDOW",
            "HELLBOY",
            "PUNISHER"
        ];
        return dictionary;
    },
    generate: function (ArrayCode) { 
        a = []
        for(var i = 0;i<ArrayCode.length;i++){
            if(i==0 || i==1){
                continue;
            }
            a.push(keysMap[parseInt(ArrayCode[i])]);
        }
        return a;
    },
    print1: function(arr,my_dict){
        // number of arrays 
        var n = arr.length;
        // to keep track of next element  
        // in each of the n arrays 
        indices=[];
        for(var i=0;i<n;i++){
            indices.push(0);
        }
        c=0;
        x=0;
        while (x==0){
            // prcurrent combination
            s='';
            for(var i=0;i<n;i++){
                s=s+arr[i][indices[i]];   
            } 
            c=c+1;
            for(var i=0;i<my_dict.length;i++){
                console.log("comparing "+my_dict[i] +" - and - "+s);
                if(my_dict[i].toString() == s.toString()){
                    msg = s;
                    return msg;
                }
            }
            // find the rightmost array that has more 
            // elements left after the current element 
            // in that array 
            next = n - 1;
            while (next >= 0 && (indices[next] + 1 >= arr[next].length)){
                next-=1;
            }
                
      
            // no such array is found so no more 
            // combinations left 
            if (next < 0){
                return 'Could not find A match';
            } 
                
      
            // if found move to next element in that 
            // array 
            indices[next] += 1
      
            // for all arrays to the right of this 
            // array current index again points to 
            // first element 
            for(var i=(next+1);i<n;i++){
                indices[i] = 0;
            }
    
        }

    }
};

module.exports = log;