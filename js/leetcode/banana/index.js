/**
 * 
 * @param {number[]} piles 
 * @param {number} H 
 * @param {number} mid 
 * @return {boolean}
 */

function canEatAllBananas(piles,H,mid){
    let h = 0
    for (let pile of piles){
        h+= Math.ceil(pile / mid);
    }
    return h <= H
}

/**
 * 
 * @param {Number[]} piles 
 * @param {Number} H 
 * @return {number}
 */


function minEatingSpeed(piles,H){
    let lo = 1;
    let hi = Math.max(...piles)
    console.log(hi)
    while(lo <= hi){
        // lo试试
        let mid = lo + ((hi-lo) >> 1);
        // console.log('-------',m);
        // m正好可以？
        if(canEatAllBananas(piles, H, m)){
            hi = mid - 1; // 该为中间值 - 1
        }else{
            lo = mid + 1; // 将最小值改为中间值 + 1
        }
    }
    return lo;
}

console.log(minEatingSpeed([3,6,7,11],8))
// console.log(canEatAllBananas([3,6,7,11],8,1))