(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{375:function(e,t,s){"use strict";s.r(t);var a=s(42),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"build-enhancements-in-acr-tasks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build-enhancements-in-acr-tasks"}},[e._v("#")]),e._v(" Build Enhancements in ACR Tasks")]),e._v(" "),s("p",[e._v("Building Linux images using "),s("a",{attrs:{href:"https://github.com/docker/buildx",target:"_blank",rel:"noopener noreferrer"}},[e._v("buildx"),s("OutboundLink")],1),e._v(" and "),s("a",{attrs:{href:"https://github.com/moby/buildkit",target:"_blank",rel:"noopener noreferrer"}},[e._v("buildkit"),s("OutboundLink")],1),e._v(" is in preview for "),s("a",{attrs:{href:"https://aka.ms/acr/tasks",target:"_blank",rel:"noopener noreferrer"}},[e._v("ACR Tasks"),s("OutboundLink")],1),e._v(". You can open an issue by clicking "),s("a",{attrs:{href:"https://github.com/Azure/acr/issues/new/choose",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),s("OutboundLink")],1),e._v(" if you have any issues trying it out.")]),e._v(" "),s("p",[e._v("With "),s("code",[e._v("buildx")]),e._v(", build performance is enhanced with various advanced features, such as concurrent building and cache import/export support.")]),e._v(" "),s("p",[e._v("The overall performance comparison is presented as below while the underlying ACR tasks are run in the south-east Asia region.")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Image")]),e._v(" "),s("th",[e._v("build")]),e._v(" "),s("th",[e._v("buildx")]),e._v(" "),s("th",[e._v("buildx and initialize cache")]),e._v(" "),s("th",[e._v("buildx with cache")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[s("a",{attrs:{href:"https://github.com/deislabs/oras",target:"_blank",rel:"noopener noreferrer"}},[e._v("oras"),s("OutboundLink")],1)]),e._v(" "),s("td",[e._v("2m48s")]),e._v(" "),s("td",[e._v("2m15s")]),e._v(" "),s("td",[e._v("3m0s")]),e._v(" "),s("td",[e._v("25s")])]),e._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"https://github.com/moby/moby",target:"_blank",rel:"noopener noreferrer"}},[e._v("moby"),s("OutboundLink")],1)]),e._v(" "),s("td",[e._v("15m34s")]),e._v(" "),s("td",[e._v("9m50s")]),e._v(" "),s("td",[e._v("12m40s")]),e._v(" "),s("td",[e._v("1m45s")])]),e._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"https://github.com/jupyter/docker-stacks/tree/master/all-spark-notebook",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker-stacks/all-spark-notebook"),s("OutboundLink")],1)]),e._v(" "),s("td",[e._v("12m52s")]),e._v(" "),s("td",[e._v("8m47s")]),e._v(" "),s("td",[e._v("10m0s")]),e._v(" "),s("td",[e._v("2m50s")])]),e._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"https://github.com/Azure/azure-cli",target:"_blank",rel:"noopener noreferrer"}},[e._v("azure-cli"),s("OutboundLink")],1)]),e._v(" "),s("td",[e._v("7m33s")]),e._v(" "),s("td",[e._v("5m59s")]),e._v(" "),s("td",[e._v("6m1s")]),e._v(" "),s("td",[e._v("1m15s")])]),e._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"https://github.com/buildkite/nodejs-docker-example",target:"_blank",rel:"noopener noreferrer"}},[e._v("nodejs-docker-example"),s("OutboundLink")],1)]),e._v(" "),s("td",[e._v("1m59s")]),e._v(" "),s("td",[e._v("1m18s")]),e._v(" "),s("td",[e._v("1m14s")]),e._v(" "),s("td",[e._v("52s")])])])]),e._v(" "),s("p",[e._v("As shown above, "),s("code",[e._v("docker buildx")]),e._v(" is generally faster than "),s("code",[e._v("docker build")]),e._v(" since "),s("code",[e._v("buildx")]),e._v(" builds images concurrently with multi-stage Dockerfiles. To "),s("a",{attrs:{href:"#build-with-cache"}},[e._v("build with cache")]),e._v(", the first run of "),s("code",[e._v("buildx")]),e._v(" is expected to be slower since there is no cache existing and it requires extra time to export caches. The subsequent run is expected to be faster, utilizing the existing caches.")]),e._v(" "),s("h2",{attrs:{id:"set-default-registry-name"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-default-registry-name"}},[e._v("#")]),e._v(" Set default registry name")]),e._v(" "),s("p",[e._v("To make it easy to copy/paste commands, and avoid having to place the registry name in each command, use the")]),e._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v(" az configure --defaults "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("acr")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("myregistry\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h2",{attrs:{id:"run-buildx-in-acr-tasks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run-buildx-in-acr-tasks"}},[e._v("#")]),e._v(" Run "),s("code",[e._v("buildx")]),e._v(" in ACR Tasks")]),e._v(" "),s("p",[e._v("Since "),s("code",[e._v("buildx")]),e._v(" has not been integrated with ACR Tasks, it is required to build "),s("code",[e._v("buildx")]),e._v(" from its source before actually using it. The "),s("code",[e._v("buildx")]),e._v(" image can be built by ACR Tasks using the multi-step task YAML file "),s("a",{attrs:{href:"bootstrap.yaml"}},[e._v("bootstrap.yaml")]),e._v(" as follows.")]),e._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("az acr run -f bootstrap.yaml /dev/null\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("The resulted "),s("code",[e._v("buildx")]),e._v(" image will be pushed to "),s("code",[e._v("myregistry.azurecr.io/buildx")]),e._v(". Visually, running the "),s("code",[e._v("buildx")]),e._v(" image is equivalent to run the "),s("code",[e._v("docker buildx")]),e._v(" command.")]),e._v(" "),s("h3",{attrs:{id:"build-using-buildx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build-using-buildx"}},[e._v("#")]),e._v(" Build using "),s("code",[e._v("buildx")])]),e._v(" "),s("p",[e._v("Images can be built using "),s("code",[e._v("buildx")]),e._v(". An example multi-step task YAML file "),s("a",{attrs:{href:"build.yaml"}},[e._v("build.yaml")]),e._v(" is provided and can be run as follows.")]),e._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("az acr run -f build.yaml "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    --set "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("BUILD_CONTEXT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("https://github.com/myuser/myrepo.git "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    --set "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("REPOSITORY_NAME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("myrepo "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    /dev/null\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[e._v("The resulted image will be pushed to "),s("code",[e._v("myregistry.azurecr.io/myrepo")]),e._v(".")]),e._v(" "),s("p",[e._v("For instance, run the following task to build "),s("code",[e._v("oras")]),e._v(" and push to "),s("code",[e._v("myregistry.azurecr.io/oras")]),e._v(" using "),s("code",[e._v("buildx")]),e._v(".")]),e._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("az acr run -f build.yaml "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    --set "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("BUILD_CONTEXT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("https://github.com/deislabs/oras.git "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    --set "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("REPOSITORY_NAME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("oras "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    /dev/null\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[e._v("It is also possible to build local repository using "),s("code",[e._v("buildx")]),e._v(". Run the following task to build using "),s("code",[e._v("buildx")]),e._v(" with the context path "),s("code",[e._v("local-repository-folder-path")]),e._v(".")]),e._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("az acr run -f build.yaml "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    --set "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("BUILD_CONTEXT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(". "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    --set "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("REPOSITORY_NAME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("myrepo "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    local-repository-folder-path\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("h3",{attrs:{id:"build-with-cache"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build-with-cache"}},[e._v("#")]),e._v(" Build with Cache")]),e._v(" "),s("p",[e._v("Building progress can be speeded up using caches. An example multi-step task YAML file "),s("a",{attrs:{href:"build_with_cache.yaml"}},[e._v("build_with_cache.yaml")]),e._v(" is provided and configured to export max cache. It can be run as follows.")]),e._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("az acr run -f build_with_cache.yaml "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    --set "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("BUILD_CONTEXT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("https://github.com/myuser/myrepo.git "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    --set "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("REPOSITORY_NAME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("myrepo "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    /dev/null\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[e._v("The resulted image will be pushed to "),s("code",[e._v("myregistry.azurecr.io/myrepo")]),e._v(", and the cache is imported from / exported to "),s("code",[e._v("myregistry.azurecr.io/myrepo:cache")]),e._v(".")]),e._v(" "),s("p",[e._v("The first run of the building process is expected to be slower than a normal "),s("code",[e._v("buildx")]),e._v(" build since it has no cache imported and it requires extra time to export the resulted cache. The subsequent runs are expected to be faster as the valid cache is imported.")])])}),[],!1,null,null,null);t.default=r.exports}}]);