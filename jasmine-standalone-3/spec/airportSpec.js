describe("Airport", function(){

  var airport = new Airport() 

  it("returns a number", function(){
    expect(airport.print()).toEqual(4)
  });
});