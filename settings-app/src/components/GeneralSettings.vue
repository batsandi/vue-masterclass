<template>
    <form class="space-y-4 mx-auto">
        <div>
            <label>Username</label>
            <input type="text">
        </div>
        <div>
            <label>Email</label>
            <input type="email">
        </div>
        <div>
            <label>About Me</label>
            <textarea></textarea>
        </div>
        <div>
            <label>Gender</label>
            <label>
                <input name="gender" type="radio" value="male">
                <span>Male</span>
            </label>
           <label>
                <input name="gender" type="radio" value="female">
                <span>Female</span>
            </label>        
        </div>
        <div>
            <label>Country</label>
            <select>
                <option>Brazil</option>
                <option>Kazakhstan</option>
                <option>Birma</option>

            </select>
        </div>
        <button type="submit" class="btn-primary">Submit</button>
    </form>
</template>
