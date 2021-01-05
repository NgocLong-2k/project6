<?php
global $count;
$count =0;
    for ($x =1;$x <=1000; $x++){
        if ($x<10&&$x==2){
            $count ++;
        }
        if ($x>=10&&$x<100){
            $a = $x/10;
            if ($a == 2){
                $count++;
            }
            $b = $x%10;
            if($b ==2 ){
                $count++;
            }
        }
        if ($x>=100){
            $a = $x/100;
            if ($a==2){
                $count++;
            }
            $b=($x%100)/10;
            if ($b==2){
                $count++;
            }
            $c=($x%100)%10;
            if ($c==2){
                $count++;
            }
        }
    }
return $count;
?>
<?php
echo (int)$count;
echo "xin chao minh là Long";
?>


