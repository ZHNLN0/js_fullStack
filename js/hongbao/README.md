如何实现红包算法
固定金额的红包， 有若干人来抢， 规则
    1. 抢到金额之和等于红包金额，不能超过，也不能少于。
    2. 手气王，0.01至少，
    3. 金额随机，随机数，公平，每个人抢到金额的概率要相同 
    
    计算过程，变量计算的本质
      发钱？ total = restAmount--
      restNum-- == num
      随机一次，restAmont = restAmont - 随机数 restNum--
      最后一个人，拿最后的钱 for(i=0;i<num-1;i++;i++)
      每次随机，钱数是我们需要的， push 数组里面，
      总合，
      math是数学对象
      math.random() 产生随机数
      parseFloat() 解析为浮点数
      类型转换 "23.1" => 23.1 parseFloat 
      0-9之间的整数
      let max = 100；
      let min = 0;
      最小值与最大值之间的整数 min +Math.floor(Math.random()*(max-min))