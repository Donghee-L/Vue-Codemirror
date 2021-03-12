<template>
    <div id='mark2'>
        <select name="" id="">
            <option value="" selected disabled hidden>Select your language</option>
            <option value="">Python</option>
            <option value="">Java</option>
            <option value="">C++</option>
        </select>
        
        <div>
            <codemirror v-model="input" :options="cmOptions" id="codemirror" @keydown="check" />
            <button @click="write">if you want to show code Click Here</button>
        </div>
        <div id="markCode" v-if="writeOn === true">
            <h2 style="text-align:center">View code(using vue-codehighlight)</h2>
            <code-highlight language="javascript" id='highlight' style='width:100%; background-color:red'>
                {{input}}
            </code-highlight>            
        </div>
        
    </div>
</template>

<script>
import CodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
import "vue-code-highlight/themes/prism-okaidia.css";

// import CodeMirror from "vue-codemirror"
// import "vue-code-highlight/themes/window.css";
import { codemirror } from "vue-codemirror";
import "codemirror/lib/codemirror.css";
// import language js
import "codemirror/mode/javascript/javascript.js";

// import theme style
import "codemirror/theme/material.css";

// lint
// import "codemirror/addon/lint/lint.css";
// import "codemirror/addon/lint/lint.js";
// import "codemirror/addon/lint/json-lint.js";

// Fold
import "codemirror/addon/fold/foldgutter.css";
import "codemirror/addon/fold/foldcode.js";
import "codemirror/addon/fold/foldgutter.js";
import "codemirror/addon/fold/brace-fold.js";
import "codemirror/addon/fold/indent-fold.js";
import "codemirror/addon/fold/markdown-fold.js";
import "codemirror/addon/fold/comment-fold.js";


export default {
    name:"MarkdownCode",
    components:{
        CodeHighlight,
        codemirror,
    },
    data:function(){
        return {
            writeOn:false,
            input: "// Write your code!",
            cmOptions: {
                tabSize: 2,
                mode: "application/json",
                theme: "material",
                lineNumbers: true,
                line: true,
                lint: true,
                lineWrapping: true,
                foldGutter: true,
                gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
                // more CodeMirror options...
            },
        }
    },
    methods:{
        check:function(event){
            console.log(event)
        },
        write:function(){
            if (!this.writeOn) {
                this.writeOn = true
            } else {
                this.writeOn = false
            }
        }
    },
    watch:{
        input:function(){
            console.log(this.input)
        }
    }
}
</script>

<style>
#mark2 {
    text-align: right;
}
#mark2 > select{
    display:inline-block;
    outline:none;
    border:none;
    cursor:pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-color: var(--mode-box-shadow);
    color: var(--mode-back-color);
    font-size: 1rem;
    padding: 10px;
    border-radius: 10px;
    margin-right: 20vw;
    transform:translateX(50%);
    font-weight: bold;
}

#mark2 > select > option {
    cursor:pointer;
    font-weight: bold;
}


#markCode {
    position:relative;
    width:80%;    
    max-height: 500px;
    margin: 0 auto;
    border-radius: 10px;
    text-align: left;
    overflow: auto;
}

#highlight {
    width: 100px;
    border-radius: 10px;
}

#markCode > textarea {
    position:absolute;
    top: 0;
    width: 80%;
    height: 400px;
    /* visibility: hidden; */
}


#mark2 > div > pre {
    width: 80%;
    margin: 40px auto;
}

#mark2 > div:nth-child(2) {
    width: 80%;
    margin: 0 auto;
    background-color: #272822;
    text-align: left;
    border-radius: 10px;
}

#mark2 > div:nth-child(2) >button{
    border:1px solid white;
    outline: none;
    cursor: pointer;
    padding: 10px;
    border-radius: 10px;
    color:white;
    background-color:#272822 ;
    margin-left: auto;
}


#codemirror {
    font-family:Avenir, Helvetica, Arial, sans-serif;
}

</style>