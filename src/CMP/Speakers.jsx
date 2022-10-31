const Speakers = () => {
    return ( 
    <div className="bg-[#f6f6f6] py-8  " > 
    <div className="pb-7" >
    <h1 className="text-[#f8679e] w-full text-center font-extrabold ">Welcome </h1>
 <h1  className="text-[#343947] text-3xl font-extrabold w-full text-center " >
    Speakers & Organizers </h1>      
    </div>

          <div className="flex justify-center gap-4">
            <div>
                <img src="https://media.istockphoto.com/photos/studio-shot-of-a-handsome-and-happy-young-man-posing-against-a-grey-picture-id1355110818?b=1&k=20&m=1355110818&s=170667a&w=0&h=O58XhltYuAw0ssiUWXAFlIitq_4kj-WdJFWcTLEoUi0=" 
                className="h-[220px] w-[225px]   " />
                <h1 className="font-bold  text-xl">Djamel belhadj</h1>
                <p className="text-sm" >Phd Student </p>
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" className="h-[220px] w-[225px]  " />
                <h1 className="font-bold  text-xl">Mohamed khlifat </h1>
                <p className="text-sm  " > Recruiter </p>
            </div>
            <div>
                <img src="https://images.squarespace-cdn.com/content/v1/53b599ebe4b08a2784696956/1495767786612-YF1JF6XGTDRMS920068H/professional-photographer-08.jpg" className="h-[220px] w-[225px]  " />
                <h1 className="font-bold text-xl">T Yanyen</h1>
                <p className="text-sm" > japanese women</p>
            </div>
            <div>
                <img src="https://i0.wp.com/www.theresaglennphotography.com/wp-content/uploads/2018/09/022.jpg?fit=2778%2C3766&ssl=1"
                 className="h-[220px] w-[225px]  " />
                <h1 className="font-bold  text-xl">Kamel Allali</h1>
                <p className="text-sm" > CEO  </p>
            </div>
          </div>
    </div> );
}
 
export default Speakers;