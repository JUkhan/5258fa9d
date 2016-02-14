var dummyData={
    offers:[
        {id:1, name:'Yugster',image:2,offerPrice:'$12.97', price:'$49.37',
         description:'74% off Colgate MaxWhite Sonic Battery Powered Toothbrushes 6-p...', expireTime:'EXPIRES TOMORROW'},
         {id:2, name:'Yugster',image:4,offerPrice:'$12.97', price:'$49.37',
         description:'74% off Colgate MaxWhite Sonic Battery Powered Toothbrushes 6-p...', expireTime:'EXPIRES TOMORROW'},
          {id:3, name:'Yugster',image:6,offerPrice:'$12.97', price:'$49.37',
         description:'74% off Colgate MaxWhite Sonic Battery Powered Toothbrushes 6-p...', expireTime:'EXPIRES TOMORROW'}
        ],
        offerByid:{id:1, name:'Yugster',image:2,offerPrice:'$12.97', price:'$49.37',
         description:'74% off Colgate MaxWhite Sonic Battery Powered Toothbrushes 6-p...', expireTime:'EXPIRES TOMORROW'},
         stores:[
             {id:1,name:'BBC', logo:'img/feeds/logos/bbc.jpg'},
             {id:2,name:'CNN', logo:'img/feeds/logos/cnn.jpg'},
             {id:3,name:'ESPN', logo:'img/feeds/logos/espn.jpg'},
             {id:4,name:'FORBES', logo:'img/feeds/logos/forbes.jpg'}
         ],
         categories:[
             {id:1, name:'Computer'},
              {id:2, name:'Fire Gun'},
               {id:3, name:'Television'},
                {id:4, name:'Knife'},
                 {id:5, name:'Karmbit'},
         ]
         
}

function getPromise(deffered, data){
  setTimeout(function () {
       deffered.resolve(data);
  },500); 
  return deffered.promise;
}

