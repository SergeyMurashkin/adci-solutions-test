import $ from 'jquery';
import '../styles/scss/base.scss';
require.context('../images', true, /\.(png|jpg)$/);

function showGeneralNews(){
    console.log('click show');

    const generalNews = $('#general-news');
    const generalNewsClasses = generalNews.attr('class').split(/\s+/);

    function isGeneralNewsShowen() {
        for ( var generalNewsClass of generalNewsClasses) {
            if (generalNewsClass === 'general-news-showen') {
                console.log('find showen');
                return true;
            }
        }
        console.log('find unshowen');
        return false;
    }

    if (isGeneralNewsShowen()){
        generalNews.addClass('general-news-unshowen');
        generalNews.removeClass('general-news-showen');
    } else {
        generalNews.addClass('general-news-showen');
        generalNews.removeClass('general-news-unshowen');
    }
  
}

$('#up-arrow').click(showGeneralNews);
    
console.log('bundle.js is downloaded');