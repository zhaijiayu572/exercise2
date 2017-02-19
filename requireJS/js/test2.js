/**
 * Created by tekiyowa on 2017/2/19.
 */
define(['./isArray'],function (isArray) {
    function arrSort(arr) {
        if(!isArray(arr)){
            return ;
        }
        arr.sort(function (a,b) {
            return a-b;
        });
        return arr;
    }
    return arrSort;
});