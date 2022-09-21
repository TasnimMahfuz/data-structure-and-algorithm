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

const graph = {

    a: ['b','c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
};

depthFirstPrint(graph,'a');
