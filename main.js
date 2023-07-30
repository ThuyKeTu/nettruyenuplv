var queue = [733419,733420,733421,733422,733423,733424,733425,733426,733427,733428,733429,733430,733431,733432,733433,733434,733435,733436,733437,733438,733439,733440,733441,733442,733443,733444,733445,733446,733447,733448,733449,733450,733451,733452,733453,733454,733455,733456,733457,733458,733459,733460,733461,733462,733463,733464,733465,733466,733527,733528,733529,733531,733532,733533,733535,734140,734141,734163,734173,734174,734175,734176,734177,734178,734179,734180,734181,734182,734183,734184,734185,734186,734187,734188,734189,734190,734191,734192,734193,734194,734195,734196,734197,734198,734199,734200,734201,734202,734203,734206,734207,734208,734209,734210,734211,734212,734213,734214,734215,734217,734218,734219,734220,734221,734222,734223,734227,734228,734229,734230,734232,734233,734234,734235,734236,734237,734238,744767,744768,744769,758066,758067,758068,758069,758475,758476]
var __token ='898f99a7-8784-13db-83ff-16bd497e8754'
var views = "3.138.248"
var cokie_1 = "ASP.NET_SessionId=cqvymuvo4u2m1xmimr1arbut; _gid=GA1.2.714743691.1690689924; _gat_gtag_UA_57670566_10=1; ASP.NET_SessionId=mfjnxmrf2jeksyazmt4vqkin; returnurl1=/; .ASPXAUTH=ACA753418C0578413E2D82091D9F1703F8EEF16EA401CA5CA073603957B8C52B5854CA6647532CBB09299E1E568C75FA85F0433D26AF3628843E1C54C6463A218957C14BBDC68D090154D9D627D70E47AC2F893B1E492E729C9C33F1255C7161710FF1877416D8D5103575B0510FEFE63957E8FF020A76DC41EE81B8ACC1072C0FFC01CB4A0AF0D81145C381C31235BA857049D1DC38FE9CDBE1EAB76AE5B43CB96B22FB92528FF3CFAFA2F726BCE0A13D51F976D5FEFC431A9F506A7DEBF3220E8245FB57710CE6DA539B684C4743B2E1F7DFD7; www.nettruyenmax.comportalroles=30EEA9C1F8D2CE4560652ADACEE2D0AA40980D536459B10A683F31F59F3C932345785CDFDE67A942481A5A900027755ED16138C6444F3CCA0652883F9B095B20F910DC3F80EAA41A857DC47B1B926CAC092D48118335F667A3EE57280B6D8F7AE9106DC11425DD8B1A83026515351DFADF50FDD635E758A4357CEBF6952DDBE7A11753775DC8DD8380482255F616BD1F43035FA874B3E3942541592E3D428180264F0044C07567960B7C51B956CF2BEFD13527BE; f.nettruyenmax.comportalroles=; DisplayName=; comicvisitor=439d8eb5-9011-46a1-8daa-b66678dbdbe7; comicread=439d8eb5-9011-46a1-8daa-b66678dbdbe7; _ga=GA1.1.156581761.1688696843; _ga_4X7L3HYB4K=GS1.1.1690689923.5.1.1690689944.0.0.0"
var cokie_2 = ""
var cokie_3 = ""
var cokie_4 = ""




var __count =0
async function readchap(num,ctoken,cokie){
    await new Promise((resolve) => {
        let data = {
            chapterId: queue[num],
            comicToken: ctoken,
            userToken: ''
        }
        
        fetch('https://f.nettruyenmax.com/Comic/Services/ComicService.asmx/ChapterLoaded',{
            method: "POST",
            headers: {
                'Content-Type': "application/json",
                'Cookie': cokie,
            },
            body:JSON.stringify(data),
        })
            .then((response) => response.text())
            .then((body) => {
                var er = body
                console.log(body)
                let succ = (er.match(/"success":(.*?),/)||[])[1]
                if(succ=="true"){
                    let token = er.match(/"token":"(.*?)"/)[1]
                    let dataread ={
                        chapterId: data.chapterId,
                        token: token
                    }
        
                    fetch('https://f.nettruyenmax.com/Comic/Services/ComicService.asmx/Read',{
                        method: "POST",
                        headers: {
                            'Content-Type': "application/json",
                            'Cookie':cokie,
                        },
                        body:JSON.stringify(dataread),
                    })
                        .then((response) => response.text())
                        .then((body) => {
                            let succ2 = (body.match(/"success":(.*?),/)||[])[1]
                            console.log(body,__count)
                            if(succ2=='true'){
                                __count++
                                setTimeout(resolve,10000)
                            }else{
                                resolve()
                            }
                        }); 
                }else{
                    resolve()
                }
            }); 
    })
}


async function main(){
    for(i=0;i<queue.length;i++){
        await readchap(i,__token,cokie_1)
    }
    main()
}

main()