var images = ["https://i.postimg.cc/bJHVp2S0/Whats-App-Image-2022-12-18-at-9-23-46-PM.jpg","https://i.postimg.cc/bJHVp2S0/Whats-App-Image-2022-12-18-at-9-23-46-PM.jpg", "https://i.postimg.cc/ryGz2yn8/Whats-App-Image-2022-12-18-at-9-23-44-PM.jpg" , "https://i.postimg.cc/4dg7pYLS/Whats-App-Image-2022-12-18-at-9-23-45-PM-3.jpg", "https://i.postimg.cc/dtHsJh8K/Whats-App-Image-2022-12-18-at-9-23-45-PM-1.jpg", "https://i.postimg.cc/B60smHG2/Whats-App-Image-2022-12-18-at-9-23-45-PM-2.jpg","https://i.postimg.cc/wv6ZtVp4/Whats-App-Image-2022-12-18-at-9-23-46-PM-1.jpg","https://i.postimg.cc/g2VgvZ4C/Whats-App-Image-2022-12-18-at-9-23-46-PM-2.jpg"];

var names = ["Family Book","AVTRA Singh kheda - Grandfather","Manjeet kour kheda-grandmother", "Ranjeet Singh Kheda- Father", "Parmeet kour - Mother", "Jasmeet Singh kheda - Brother", "Jasbani kour kheda- me","Prabhveer singh kheda - chota bhai"];

var age = [0,75,70, 47, 45, 18, 13, 12]

/*

We must sort the elements present inside the array "age" to print the age value of the family member for the respective family member.

Write: "age.sort()"

*/


"age.sort()"

"age.reverse()"
var i = 0;

function update()
{
    i++;

    var numbers_of_family_member_in_array = 7
    if(i > numbers_of_family_member_in_array )
    {
        i = 0;
    }
    
    var updatedImage = images[i];

    var updatedName  = names[i];
    
    var updatedAge = age[i]

    document.getElementById("family_member_image").src = updatedImage;
    
    document.getElementById("family_member_name").innerHTML = updatedName;

    document.getElementById("family_member_age").innerHTML = updatedAge;

    /*

    To find the maximum age value amongst the family members, we need to use the Math, and the max function together and to display the maximum age, we need print the value. Thus make use of console.

    Write:  "var max_number = Math.max.apply(Math, age)
            "console.log("The highest age is: ", max_number)"

    */

var max_number = Math.max.apply(Math,age )
console.log("The highest age is: ",max_number)

    /*

    To find the minimum age value amongst the family members, we need to use the Math, and the min function together and to display the maximum age, we need print the value. Thus make use of console.

    Write:  "var min_number = Math.min.apply(Math, age)
            "console.log("The lowest age is: ", min_number)"

    */

    var min_number = Math.min .apply(Math,age )
    console.log("The lowest age is: ",min_number )
}