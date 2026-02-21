import {test} from '@playwright/test';

test.describe("User Story", ()=>{

    test.beforeAll(async ()=>{
        console.log("Before all got executed");
    })
    
    test.beforeEach(async ()=>{
        console.log("Before each got executed");
    });
    test.afterEach(async ()=>{
        console.log("After each got executed");
    })

    test("Test case1", async()=>{
        console.log("Test case 1 got executed");
    });

    test("Test case2", async()=>{
        console.log("Test case 2 got executed");
    });

    test("Test case3", async()=>{
        console.log("Test case 3 got executed");
    }); 

})



