<template>
    <div id="mark">
        <textarea v-model="input">

        </textarea>
        <div v-html="compileMarkdown">

        </div>
    </div>
</template>
<script>
import marked from "marked"

export default {
    name:"Markdown",
    data:function(){
        return {
            input:"# Hello!",
        }
    },
    computed:{
        compileMarkdown:function(){
            return marked(this.input,{sanitize:true})
        }
    }
}
</script>
<style>

#mark {
    width: 80%;
    overflow: auto;    
    margin:0 auto;
    display:flex;
    text-align: left;
}

#mark > textarea, #mark > div {
    border:none;
    outline:none;
    resize:none;
    width:50%;
    height:500px;
    padding:10px;   
    background-color: var(--mode-editor-color);
    font-family: 'Helvetica Neue', Arial, sans-serif;
    color:var(--mode-color);
    border-radius: 10px;
}

#mark > textarea {
    border-right: 5px solid var(--mode-back-color);
}






</style>