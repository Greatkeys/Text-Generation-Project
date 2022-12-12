// creating the paragraphs to work with
const paragraphs = [
    'First paragraph Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi nobis distinctio illum doloremque dolorem molestias accusantium et quasi! Accusamus veritatis optio eligendi quis eum consectetur exercitationem. Quo enim, vel porro, quibusdam laborum dignissimos iure ipsam quis laboriosam at quae tempora, commodi blanditiis accusantium assumenda similique in! Nulla dolor odit nostrum!',
    'second paragraph Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi nobis distinctio illum doloremque dolorem molestias accusantium et quasi! Accusamus veritatis optio eligendi quis eum consectetur exercitationem. Quo enim, vel porro, quibusdam laborum dignissimos iure ipsam quis laboriosam at quae tempora, commodi blanditiis accusantium assumenda similique in! Nulla dolor odit nostrum!',
    'third paragraph Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi nobis distinctio illum doloremque dolorem molestias accusantium et quasi! Accusamus veritatis optio eligendi quis eum consectetur exercitationem. Quo enim, vel porro, quibusdam laborum dignissimos iure ipsam quis laboriosam at quae tempora, commodi blanditiis accusantium assumenda similique in! Nulla dolor odit nostrum!',
    'fourth paragraph Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi nobis distinctio illum doloremque dolorem molestias accusantium et quasi! Accusamus veritatis optio eligendi quis eum consectetur exercitationem. Quo enim, vel porro, quibusdam laborum dignissimos iure ipsam quis laboriosam at quae tempora, commodi blanditiis accusantium assumenda similique in! Nulla dolor odit nostrum!',
    'fifth paragraph Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi nobis distinctio illum doloremque dolorem molestias accusantium et quasi! Accusamus veritatis optio eligendi quis eum consectetur exercitationem. Quo enim, vel porro, quibusdam laborum dignissimos iure ipsam quis laboriosam at quae tempora, commodi blanditiis accusantium assumenda similique in! Nulla dolor odit nostrum!',
    'sixth paragraph Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi nobis distinctio illum doloremque dolorem molestias accusantium et quasi! Accusamus veritatis optio eligendi quis eum consectetur exercitationem. Quo enim, vel porro, quibusdam laborum dignissimos iure ipsam quis laboriosam at quae tempora, commodi blanditiis accusantium assumenda similique in! Nulla dolor odit nostrum!',
    'seventh paragraph Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi nobis distinctio illum doloremque dolorem molestias accusantium et quasi! Accusamus veritatis optio eligendi quis eum consectetur exercitationem. Quo enim, vel porro, quibusdam laborum dignissimos iure ipsam quis laboriosam at quae tempora, commodi blanditiis accusantium assumenda similique in! Nulla dolor odit nostrum!',
    'eighth paragraph Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi nobis distinctio illum doloremque dolorem molestias accusantium et quasi! Accusamus veritatis optio eligendi quis eum consectetur exercitationem. Quo enim, vel porro, quibusdam laborum dignissimos iure ipsam quis laboriosam at quae tempora, commodi blanditiis accusantium assumenda similique in! Nulla dolor odit nostrum!',
    'ninth paragraph Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi nobis distinctio illum doloremque dolorem molestias accusantium et quasi! Accusamus veritatis optio eligendi quis eum consectetur exercitationem. Quo enim, vel porro, quibusdam laborum dignissimos iure ipsam quis laboriosam at quae tempora, commodi blanditiis accusantium assumenda similique in! Nulla dolor odit nostrum!',
]
const form = document.querySelector('.lorem-form');
const text = document.querySelector('.ipsum-text');
const input = document.getElementById('number-input');
form.addEventListener('submit', function(e){
    e.preventDefault();
    let value = parseInt(input.value);
    let slicedItem = paragraphs.slice(0, value)
    const random = Math.floor(Math.random() * paragraphs.length);
    // console.log(slicedItem)
    if(value > 0 && value < 10){
        const mappedText = slicedItem.map(function(item){
            return `<p>${item}</p>`
        }).join('');
        text.innerHTML = mappedText;
    }else{
        text.innerHTML = paragraphs[random]
    }
    if(text.innerHTML !== ''){
        input.value = '';
    }
})
