let Profile = {
    baner: 'baner.png',
    Profile_pic: 'pro.jpg',
    UserName: 'Polash Islam',
    posts: [{
        content: 'Dhaka is on fire',
        img: 'box-img-1.jpeg',
        like: 10,
        likee:`<i class="fa-solid fa-thumbs-up"></i>`,
        comment: [`ki hoise`,` wow` , ` dh`],
        cmt: `<i class="fa-solid fa-comment"></i>`
    },{
        content: 'Rajshahi is on fire',
        img: 'box-img-2.jpeg',
        like: 30,
        likee:`<i class="fa-solid fa-thumbs-up"></i>`,
        comment: [`Nice`,` Wow`],
        cmt: `<i class="fa-solid fa-comment"></i>`
    }]
};
let size = Profile.posts.length; 
let container = document.getElementById('container');
let baner = document.createElement('img');
container.appendChild(baner);
baner.setAttribute('src', Profile.baner);
baner.setAttribute('id','baner');
let img_section = document.createElement('div');
container.appendChild(img_section);
img_section.setAttribute('id','section');
let img_sec_left = document.createElement('div');
img_section.appendChild(img_sec_left);
img_sec_left.setAttribute('id','img_sec_left')
let img_sec_right = document.createElement('div');
img_section.appendChild(img_sec_right);
img_sec_right.setAttribute('id','img_sec_right')
let pro_img = document.createElement('img');
pro_img.setAttribute('src',Profile.Profile_pic);
img_sec_left.appendChild(pro_img);
pro_img.setAttribute('id','pro_img');
let UserName = document.createElement('h2');
UserName.setAttribute('id','userName');
img_sec_left.appendChild(UserName);
UserName.innerHTML = Profile.UserName;
let story_btn = document.createElement('button');
story_btn.setAttribute('id','story_btn');
story_btn.innerHTML = 'Add to Story'
img_sec_right.appendChild(story_btn);
let edit_btn = document.createElement('button');
edit_btn.setAttribute('id','edit_btn');
edit_btn.innerHTML = 'Edit Profile'
img_sec_right.appendChild(edit_btn);
let container2 = document.getElementById('container2')
for(let i=0;i<size;i++){
    let time_line_1st = document.createElement('div');
    container2.appendChild(time_line_1st);
    time_line_1st.setAttribute('id','time_line_1st');
    let p1 = document.createElement('p');
    time_line_1st.appendChild(p1);
    p1.innerHTML = Profile.posts[i].content;
    p1.setAttribute('id','p1');
    let box_img = document.createElement('img');
    time_line_1st.appendChild(box_img);
    box_img.setAttribute('src',Profile.posts[i].img);
    box_img.setAttribute('id','img');
    let like_com = document.createElement('div');
    like_com.setAttribute('id','like-com');
    time_line_1st.appendChild(like_com);
    let like_per = document.createElement('div');
    like_com.appendChild(like_per);
    let comment_per = document.createElement('div');
    like_com.appendChild(comment_per);
    let p3 = document.createElement('span');
    like_per.appendChild(p3);
    p3.innerHTML = Profile.posts[i].likee;
    p3.setAttribute('id','p2');
    let p2 = document.createElement('span');
    like_per.appendChild(p2);
    p2.innerHTML = Profile.posts[i].like;
    p2.setAttribute('id','p2');
    let p4 = document.createElement('span');
    comment_per.appendChild(p4);
    p4.innerHTML = Profile.posts[i].comment.length;
    p4.setAttribute('id','p2');
    let p5 = document.createElement('span');
    comment_per.appendChild(p5);
    p5.innerHTML = Profile.posts[i].cmt;
    p5.setAttribute('id','p2');
    let comment = document.createElement('p');
    time_line_1st.appendChild(comment);
    comment.innerHTML = Profile.posts[i].comment;
    comment.setAttribute('id','comment')
}