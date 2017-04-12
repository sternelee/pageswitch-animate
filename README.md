### pageswitch-animate

#### 说明作用

为 [pageswitch](https://github.com/qiqiboy/pageSwitch) 添加 [animate.css](https://daneden.github.io/animate.css/)。

默认使用类名`animate`来区别需要动画的元素。
`data-effect` 对应 `animation-name`, `data-time` 对应 `animation-duration`, `data-delay` 对应 `animation-delay`

#### 在 `React` 中使用

```
import Pw from 'pageswitch';
import Pwa from 'pageswitch-animate';
import 'pageswitch-animate/css/animate.css';

...
// 使用 id 为 pw
componentDidMount(){
    let pw = new Pw('pw',{
        ...
        });
    Pwa.pwAnimateCache();
    Pwa.pwAnimate(pw);
    pw.on('after', function(m, n) {
        Pwa.pwAnimate(a);
    });
}

...

render(){
    return(
        <div id="pw">
            <div><span className="animate" data-effect="bounceIn" data-time="2s" data-delay="1s">动画一</span></div>
            <div><span className="animate" data-effect="fadeInUp" data-time="1s">动画二</span></div>
        </div>
    )
}

...
```
