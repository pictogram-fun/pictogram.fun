import React from 'react';
import Favicon from 'react-favicon';
import DocMeta from 'react-doc-meta';

// icons
import icon from '../images/icon.png';
import favicon0 from '../images/favicons/picto0.png';
import favicon1 from '../images/favicons/picto1.png';
import favicon2 from '../images/favicons/picto2.png';
import favicon3 from '../images/favicons/picto3.png';
import favicon4 from '../images/favicons/picto4.png';
// import favicon0 from '../images/favicons/favicon-0.png';
// import favicon1 from '../images/favicons/favicon-1.png';
import ogp from '../images/ogp.png';

const metaTags = [
    {name: 'og:image', content: ogp}
];

export default class Home extends React.Component {
    render() {
        return (
            <div id="home">
                <DocMeta tags={metaTags}/>
                <Favicon url={[favicon0, favicon1, favicon2, favicon3, favicon4]}/>

                <h1>Welcome to Pictogram Fun !!!</h1>

                <img id="main-icon" src={icon} alt="pictogram.fun main icon"/>


                <div className="home-section-sns">
                    <a href="https://www.instagram.com/pictogram.fun/" target="_blank">
                        <i className="fa fa-instagram sns-icon" aria-hidden="true"/>
                    </a>
                    <a href="https://twitter.com/pictogram_fun" target="_blank">
                        <i className="fa fa-twitter sns-icon" aria-hidden="true"/>
                    </a>
                </div>

                <div className="section">
                    <p className="text">世界で最も多く危険な仕事をこなし、国境・言語・性別・文化、あらゆるボーダーを超え活躍するタフでジェントルなヒト、ピクトグラム！
                        ピクトグラムの活動を讃える、ピクトグラムに捧げるピクトグラムのためのインスタグラム〜〜</p>

                    <p className="text">Who does skillfully perform a difficult and dangerous job?
                        That’s Pictogram! His job is “alert”. He uses his body and tell us our dangerous. He doesn’t
                        care
                        about cross-border, language barrier,gender, and cultures.</p>

                    <p className="text-sm">※ピクトグラムとは・・・
                        非常口のあの人。言語に制約されず体を張って伝達を直感的に行う達人。</p>
                </div>
            </div>
        );
    }
}
