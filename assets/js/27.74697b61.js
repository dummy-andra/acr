(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{379:function(t,s,a){"use strict";a.r(s);var e=a(42),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"acr-task-walkthrough"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#acr-task-walkthrough"}},[t._v("#")]),t._v(" ACR Task Walkthrough")]),t._v(" "),a("p",[t._v("ACR Tasks provide a container centric compute primitive, focused on building and patching containers.\nThis doc covers a walkthrough to understand the capabilities of ACR Tasks.")]),t._v(" "),a("h2",{attrs:{id:"acr-task-execution-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#acr-task-execution-model"}},[t._v("#")]),t._v(" ACR Task Execution Model")]),t._v(" "),a("p",[t._v("ACR Tasks take advantage of the container execution and isolation model, enabling customers to run any series of containers as commands across a common directory. ACR Tasks provide a common context and conditional/dependency flow between steps providing primitive, yet robust scenarios. By deferring the execution to containers, ACR Tasks has minimal dependencies between the Task execution environment and the code within a container.")]),t._v(" "),a("p",[t._v("Using containers as a collection of commands; developers may use any language or framework they desire, running on Linux or Windows operating systems, minimizing version dependency.")]),t._v(" "),a("h1",{attrs:{id:"task-step-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#task-step-types"}},[t._v("#")]),t._v(" Task Step Types")]),t._v(" "),a("p",[t._v("ACR Tasks supports three step types:")]),t._v(" "),a("ul",[a("li",[a("strong",[a("a",{attrs:{href:"#build"}},[t._v("build")])]),t._v(" containers using familiar syntax of "),a("code",[t._v("docker build")])]),t._v(" "),a("li",[a("strong",[a("a",{attrs:{href:"#push"}},[t._v("push")])]),t._v(" supports "),a("code",[t._v("docker push")]),t._v(" of newly built or re-tagged images to a registry, including ACR, Docker hub and other private registries.")]),t._v(" "),a("li",[a("strong",[a("a",{attrs:{href:"#cmd"}},[t._v("cmd")])]),t._v(" to run a container as a command, enabling parameters passed to the containers "),a("code",[t._v("[ENTRYPOINT]")]),t._v(". "),a("code",[t._v("cmd")]),t._v(" supports  run parameters including volumes and other familiar "),a("code",[t._v("docker run")]),t._v(" parameters, enabling unit and functional testing with concurrent container execution.")])]),t._v(" "),a("h1",{attrs:{id:"running-samples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-samples"}},[t._v("#")]),t._v(" Running Samples")]),t._v(" "),a("p",[t._v("Samples referenced use "),a("code",[t._v("az acr run")]),t._v(" and assume a default registry is configured.")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Configure a default registry")]),t._v(" "),a("p",[t._v("Assuming your registry is named yourRegistry.azurecr.io, run the following")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("az configure --defaults "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("acr")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("yourRegistry\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])])]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("Note:")]),t._v(" As of 9/9/18, "),a("code",[t._v("az acr run")]),t._v(" is not yet public. Replace "),a("code",[t._v("az acr run")]),t._v(" with "),a("code",[t._v("az acr build")]),t._v(", using the "),a("code",[t._v("-f")]),t._v(" parameter to reference the "),a("code",[t._v("task.yaml")]),t._v(" file.")])]),t._v(" "),a("h2",{attrs:{id:"building-a-single-image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#building-a-single-image"}},[t._v("#")]),t._v(" Building A Single Image")]),t._v(" "),a("p",[t._v("Using "),a("a",{attrs:{href:"https://aka.ms/acr/build",target:"_blank",rel:"noopener noreferrer"}},[t._v("ACR Build"),a("OutboundLink")],1),t._v(", users can easily build and optionally push single images.")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("az acr build -t hello-world:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(".Build.ID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" https://github.com/Azure-Samples/acr-build-helloworld-node.git\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("The equivalent ACR task would involve:")]),t._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1.0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("preview"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("t "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(".Run.Registry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("/hello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("world"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(".Run.ID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" .\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{.Run.Registry}}/hello-world:{{.Run.ID}}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("The task.yaml version does the following:")]),t._v(" "),a("ul",[a("li",[t._v("breaks up build and push into separate steps")]),t._v(" "),a("li",[t._v("changes "),a("code",[t._v("Build.ID")]),t._v(" to "),a("RouterLink",{attrs:{to:"/tasks/container-registry-ref-acr-tasks-yaml.html#runid"}},[t._v("Run.ID")]),t._v(" to better represent a run, which may do many things, in addition to "),a("code",[t._v("docker build")])],1),t._v(" "),a("li",[t._v("provides a fully qualified reference to the target registry using "),a("RouterLink",{attrs:{to:"/tasks/container-registry-ref-acr-tasks-yaml.html#run.registry"}},[t._v("Run.Registry")]),t._v(". ACR Tasks supports pushing images to other registries.")],1)]),t._v(" "),a("p",[t._v("To test the above yaml, run the following command in "),a("a",{attrs:{href:"https://shell.azure.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("cloud shell"),a("OutboundLink")],1),t._v(" or any other bash environment.")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("az acr run -f build-push-hello-world.yaml https://github.com/azure-samples/acr-tasks.git\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"work-in-progress"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#work-in-progress"}},[t._v("#")]),t._v(" WORK IN PROGRESS ---")]),t._v(" "),a("blockquote",[a("p",[t._v('[!div class="nextstepaction"]')])]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/tasks/container-registry-tasks-overview.html"}},[t._v("ACR Task Overview")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/tasks/container-registry-ref-acr-tasks-yaml.html"}},[t._v("ACR task.yaml Reference")])],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);