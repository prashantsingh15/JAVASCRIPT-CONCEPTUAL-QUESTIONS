
//  How to make passing a argument mandatory

function check() {

    throw new Error("Param required")
}

function show(name = check()) {

    console.log(name)

}

show("Hello")