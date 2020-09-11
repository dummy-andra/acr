(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{373:function(t,e,a){"use strict";a.r(e);var s=a(42),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"running-acr-tasks-on-dedicated-agent-pools"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-acr-tasks-on-dedicated-agent-pools"}},[t._v("#")]),t._v(" Running ACR Tasks on Dedicated Agent Pools")]),t._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),a("p",[t._v("ACR Task Agent Pool provides "),a("a",{attrs:{href:"https://aka.ms/acr/tasks",target:"_blank",rel:"noopener noreferrer"}},[t._v("ACR Task"),a("OutboundLink")],1),t._v(" execution in dedicated machine pools.")]),t._v(" "),a("p",[t._v("Task Agent Pools provide:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("VNet Support:")]),t._v(" Agent Pools may be assigned to Azure VNets, providing access the resources in the VNet (eg, Container Registry, Key Vault, Storage).")]),t._v(" "),a("li",[a("strong",[t._v("Scale As Needed:")]),t._v(" Agent pools can be increased as needed, or scaled to zero, billed based on allocation.")]),t._v(" "),a("li",[a("strong",[t._v("More Memory and CPU Options:")]),t._v(" The current preview provides 3 standard tiers, S1 (2 cpu, 3G mem), S2 (4 cpu, 8G mem), and S3 (8 cpu, 16G mem) and 1 isolated tier, I6 (64 cpu, 216G mem).")]),t._v(" "),a("li",[a("strong",[t._v("Agent Pools per Workload:")]),t._v(" To serve different configurations, instance agent pools based on scale and tier options to serve different types of workloads.")]),t._v(" "),a("li",[a("strong",[t._v("Hybrid Managed Pools:")]),t._v(" Task pools are patched and maintained by Azure. Task pools provide a balance between reserved allocation without the need to maintain the individual VMs.")])]),t._v(" "),a("p",[t._v("ACR Task Agent Pools are currently previewed in WestUS2, SouthCentralUS, EastUS2, EastUS, CentralUS, USGovArizona, USGovTexas and USGovVirginia.")]),t._v(" "),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure CLI"),a("OutboundLink")],1),t._v(" "),a("strong",[t._v("2.3.1")]),t._v(" or above.")]),t._v(" "),a("li",[t._v("A "),a("a",{attrs:{href:"https://aka.ms/acr/tiers",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("premium")]),t._v(" container registry"),a("OutboundLink")],1),t._v(" in the above preview regions.")])]),t._v(" "),a("h2",{attrs:{id:"create-and-manage-an-acr-task-agent-pool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-and-manage-an-acr-task-agent-pool"}},[t._v("#")]),t._v(" Create and Manage an ACR Task Agent Pool")]),t._v(" "),a("ul",[a("li",[t._v("Set the default registry, simplifying CLI commands")])]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("az configure --defaults "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("acr")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("registryName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ul",[a("li",[t._v("Create an agent pool of tier S2 (4 cpu/instance) with 1 instance.")])]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("az acr agentpool create "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --name myagentpool "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --tier S2\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("ul",[a("li",[t._v("Scale the agent pool with more instances or scale in to 0.")])]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("az acr agentpool update "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --name myagentpool "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --count "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h2",{attrs:{id:"create-an-agent-pool-in-a-vnet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-an-agent-pool-in-a-vnet"}},[t._v("#")]),t._v(" Create an Agent Pool in a VNet")]),t._v(" "),a("ul",[a("li",[t._v("Task Agent Pools require access to the following Azure services. The following firewall rules must be added to any existing network security groups or user-defined routes.")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Direction")]),t._v(" "),a("th",[t._v("Protocol")]),t._v(" "),a("th",[t._v("Source")]),t._v(" "),a("th",[t._v("Source Port")]),t._v(" "),a("th",[t._v("Destination")]),t._v(" "),a("th",[t._v("Dest Port")]),t._v(" "),a("th",[t._v("Used")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Outbound")]),t._v(" "),a("td",[t._v("TCP")]),t._v(" "),a("td",[t._v("VirtualNetwork")]),t._v(" "),a("td",[t._v("Any")]),t._v(" "),a("td",[t._v("AzureKeyVault")]),t._v(" "),a("td",[t._v("443")]),t._v(" "),a("td",[t._v("Default")])]),t._v(" "),a("tr",[a("td",[t._v("Outbound")]),t._v(" "),a("td",[t._v("TCP")]),t._v(" "),a("td",[t._v("VirtualNetwork")]),t._v(" "),a("td",[t._v("Any")]),t._v(" "),a("td",[t._v("Storage")]),t._v(" "),a("td",[t._v("443")]),t._v(" "),a("td",[t._v("Default")])]),t._v(" "),a("tr",[a("td",[t._v("Outbound")]),t._v(" "),a("td",[t._v("TCP")]),t._v(" "),a("td",[t._v("VirtualNetwork")]),t._v(" "),a("td",[t._v("Any")]),t._v(" "),a("td",[t._v("EventHub")]),t._v(" "),a("td",[t._v("443")]),t._v(" "),a("td",[t._v("Default")])]),t._v(" "),a("tr",[a("td",[t._v("Outbound")]),t._v(" "),a("td",[t._v("TCP")]),t._v(" "),a("td",[t._v("VirtualNetwork")]),t._v(" "),a("td",[t._v("Any")]),t._v(" "),a("td",[t._v("AzureActiveDirectory")]),t._v(" "),a("td",[t._v("443")]),t._v(" "),a("td",[t._v("Default")])]),t._v(" "),a("tr",[a("td",[t._v("Outbound")]),t._v(" "),a("td",[t._v("TCP")]),t._v(" "),a("td",[t._v("VirtualNetwork")]),t._v(" "),a("td",[t._v("Any")]),t._v(" "),a("td",[t._v("AzureMonitor")]),t._v(" "),a("td",[t._v("443")]),t._v(" "),a("td",[t._v("Default")])])])]),t._v(" "),a("p",[t._v("[NOTE] If your Tasks require additional resources from public internet, eg, if you run docker build task that needs to pull the base images from DockerHub or restore Nuget package, please add the corresponding rules.")]),t._v(" "),a("ul",[a("li",[t._v("Create an agent pool in the VNet.")])]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("subnet")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("az network vnet subnet show "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        -g myvnetresourcegroup "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        --vnet-name myvnetname "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        -n mysubnetname "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        --query "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("id")]),t._v(" -o tsv"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n\naz acr agentpool create "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --name myagentpool "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --tier S2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --subnet-id "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$subnet")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("h2",{attrs:{id:"schedule-runs-on-the-agent-pool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#schedule-runs-on-the-agent-pool"}},[t._v("#")]),t._v(" Schedule Runs on the Agent Pool")]),t._v(" "),a("ul",[a("li",[t._v("Schedule a quick run on the agent pool.")])]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("az acr build "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --agent-pool myagentpool "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -t myimage:mytag "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -f Dockerfile "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    https://github.com/Azure-Samples/acr-build-helloworld-node.git\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("ul",[a("li",[t._v("Create a recurring task on the agent pool.")])]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("az acr task create "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -n mytask "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --agent-pool myagentpool "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -t myimage:mytag "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -f Dcokerfile "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -c https://github.com/Azure-Samples/acr-build-helloworld-node.git "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --commit-trigger-enabled "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n\naz acr task run "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -r mypremiumregistry "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -n mytask\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("ul",[a("li",[t._v("Query the agent pool queue status (current scheduled runs on the agent pool).")])]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("az acr agentpool show "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -n myagentpool "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --queue-count\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h2",{attrs:{id:"preview-limitations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preview-limitations"}},[t._v("#")]),t._v(" Preview Limitations")]),t._v(" "),a("ul",[a("li",[t._v("Task Agent Pools currently support Linux nodes. Windows nodes are not currently supported.")]),t._v(" "),a("li",[t._v("For each registry, the default total cpu quota of all standard agent pools is 16 and all isolated agent pools is 0. Please "),a("a",{attrs:{href:"https://aka.ms/acr/support/create-ticket",target:"_blank",rel:"noopener noreferrer"}},[t._v("open a support ticket"),a("OutboundLink")],1),t._v(" for additional allocation.")])])])}),[],!1,null,null,null);e.default=n.exports}}]);