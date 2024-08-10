import React from 'react';
const lorem = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut sem nec magna vestibulum dictum. Sed iaculis aliquet dolor, aliquam pellentesque quam egestas vitae. Nulla ac neque pulvinar lorem rhoncus pellentesque. Sed at fringilla felis, eget tincidunt arcu. Quisque scelerisque dui sodales, congue felis id, tristique enim. Nam porta nisl nec aliquam volutpat. Maecenas dolor ex, sagittis a suscipit et, vestibulum id est. Praesent erat nisl, ullamcorper ac dapibus dictum, finibus vel felis. Aliquam eu luctus erat.\n" +
    "\n" +
    "In tempus rutrum ligula, quis pretium nisi semper quis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam suscipit ante sit amet efficitur vestibulum. Donec facilisis lobortis volutpat. Etiam finibus tellus vel tellus luctus, ut bibendum lacus finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies tempus odio, a finibus neque pretium non. Donec vel semper ligula, eget malesuada libero. Nunc sit amet ex facilisis, bibendum nunc ac, dapibus urna. Integer convallis augue tellus, consequat lacinia eros euismod sit amet. Aliquam efficitur consequat magna quis tincidunt. Cras cursus scelerisque nulla, eu ultrices tellus vestibulum eget. Maecenas sapien ipsum, consectetur blandit tempus sed, malesuada finibus nisi. Integer eu est dolor. Suspendisse aliquam ligula nunc, ac placerat urna egestas vel.\n" +
    "\n" +
    "Nullam dictum odio mauris, nec pellentesque mi pharetra eget. Proin at dui feugiat, ultrices felis nec, facilisis magna. Nunc et sapien facilisis, consequat magna et, porta lorem. Phasellus consequat quam non mi vulputate suscipit. Praesent a cursus augue. Maecenas ligula odio, eleifend ut arcu id, consequat venenatis dolor. Curabitur sodales lacus quis interdum varius. Maecenas tincidunt condimentum euismod. Aenean sem enim, aliquet vel dictum ut, efficitur scelerisque nunc. Nam faucibus lorem porttitor mi porta laoreet. Aenean nec vestibulum dui. Ut sollicitudin purus in leo cursus, vitae finibus tellus varius. Cras eget vestibulum nisi. Maecenas mauris nisl, molestie a dui quis, consectetur venenatis ligula."



const Profile = () => {
    return (
        <div className="wrapper flex max-lg:flex-col mb-16">
            <div className="indent-12 max-lg:w-full w-1/2 mb-8">
                <h3 className="mb-4">Обо мне</h3>
                {lorem}
            </div>
            <div className="w-1/2 max-lg:w-full p-8">
                <div className="w-full h-96 bg-blue-400 text-center content-center"> Photo</div>
            </div>


        </div>
    );
};

export default Profile;