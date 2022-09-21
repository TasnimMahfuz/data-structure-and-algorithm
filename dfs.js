//https://www.youtube.com/watch?v=tWVWeAqZ0WU&list=PLeVK8Mnu3n-e88OtFMCvSM9i_Ew1PkFCj&index=2&t=4815s


const depthFirstPrint = (graph, source) =>{

    const stack = [source];// prothome stack initialize kore oita traverse kora.

    while(stack.length > 0)
    {
        const current = stack.pop();
        console.log(current);

        for(let neighbor of graph[current])
        {
            stack.push(neighbor);
        }
    }

};
/*

//in this recursive method, there is no explicit base case.
//in other words, no if(), return statement.
//when an empty neighbor is passed, zero iteration occurs, which is what happens in base case.
//thus, this code works...


const depthFirstPrint = (graph, source) =>{

    console.log(source);

    for(let neighbor of graph[source])
    {
        depthFirstPrint(graph, neighbor);
    }
};
*/

const graph = {

    a: ['b','c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
};

depthFirstPrint(graph,'a');
