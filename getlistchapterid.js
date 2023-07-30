
var __id =gOpts.comicId
var queue =[]

$.get('https://www.nettruyenmax.com/Comic/Services/ComicService.asmx/ProcessChapterList?comicId=' + __id, function(data){
    var beforeque = data.chapters.reverse()
    for(i=0;i<beforeque.length;i++){
        queue.push(beforeque[i].chapterId)
    }
    console.log(JSON.stringify(queue))
});