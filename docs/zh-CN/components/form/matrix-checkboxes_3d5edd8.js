amis.define('docs/zh-CN/components/form/matrix-checkboxes.md', function(require, exports, module, define) {

  module.exports = {
    "title": "MatrixCheckboxes 矩阵",
    "description": null,
    "type": 0,
    "group": null,
    "menuName": "MatrixCheckboxes",
    "icon": null,
    "order": 30,
    "html": "<div class=\"markdown-body\"><p>矩阵类型的输入框。</p>\n<h2><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" href=\"#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本用法</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n  \"debug\": true,\n  \"body\": [\n    {\n      \"type\": \"matrix-checkboxes\",\n      \"name\": \"matrix\",\n      \"label\": \"Matrix\",\n      \"rowLabel\": \"行标题说明\",\n      \"columns\": [\n        {\n          \"label\": \"列1\"\n        },\n        {\n          \"label\": \"列2\"\n        }\n      ],\n      \"rows\": [\n        {\n          \"label\": \"行1\"\n        },\n        {\n          \"label\": \"行2\"\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%85%A8%E9%80%89\" href=\"#%E5%85%A8%E9%80%89\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>全选</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n  \"debug\": true,\n  \"body\": [\n    {\n      \"type\": \"matrix-checkboxes\",\n      \"name\": \"matrix\",\n      \"label\": \"Matrix\",\n      \"rowLabel\": \"行标题说明\",\n      \"xCheckAll\": true,\n      \"yCheckAll\": true,\n      \"columns\": [\n        {\n          \"label\": \"列1\"\n        },\n        {\n          \"label\": \"列2\"\n        }\n      ],\n      \"rows\": [\n        {\n          \"label\": \"行1\"\n        },\n        {\n          \"label\": \"行2\"\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%8D%95%E9%80%89%E6%A8%A1%E5%BC%8F\" href=\"#%E5%8D%95%E9%80%89%E6%A8%A1%E5%BC%8F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>单选模式</h2><p>配置<code>&quot;multiple&quot;: false</code>可以设置单选，配置<code>singleSelectMode</code>可以设置单选模式</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n  \"debug\": true,\n  \"body\": [\n    {\n      \"type\": \"matrix-checkboxes\",\n      \"name\": \"matrix\",\n      \"label\": \"Matrix\",\n      \"rowLabel\": \"行标题说明\",\n      \"multiple\": false,\n      \"columns\": [\n        {\n          \"label\": \"列1\"\n        },\n        {\n          \"label\": \"列2\"\n        }\n      ],\n      \"rows\": [\n        {\n          \"label\": \"行1\"\n        },\n        {\n          \"label\": \"行2\"\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%8A%A8%E6%80%81%E9%80%89%E9%A1%B9\" href=\"#%E5%8A%A8%E6%80%81%E9%80%89%E9%A1%B9\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>动态选项</h2><p>可以配置 source 渲染动态选项</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n  \"body\": [\n    {\n        \"name\": \"matrix\",\n        \"type\": \"matrix-checkboxes\",\n        \"label\": \"动态矩阵组件\",\n        \"source\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/options/matrix?waitSeconds=1\"\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<p>以上面为例，source 接口返回格式如下：</p>\n<pre><code class=\"language-json\"><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">\"status\"</span><span class=\"token operator\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"msg\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"ok\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"data\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token property\">\"columns\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        <span class=\"token property\">\"label\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"Col A\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"col\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"a\"</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        <span class=\"token property\">\"label\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"Col B\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"col\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"b\"</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        <span class=\"token property\">\"label\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"Col C\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"col\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"c\"</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        <span class=\"token property\">\"label\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"Col D\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"col\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"d\"</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        <span class=\"token property\">\"label\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"Col E\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"col\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"e\"</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    <span class=\"token property\">\"rows\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        <span class=\"token property\">\"label\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"Row 1\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"rol\"</span><span class=\"token operator\">:</span> <span class=\"token number\">1</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        <span class=\"token property\">\"label\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"Row 2\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"rol\"</span><span class=\"token operator\">:</span> <span class=\"token number\">2</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        <span class=\"token property\">\"label\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"Row 3\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"rol\"</span><span class=\"token operator\">:</span> <span class=\"token number\">3</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        <span class=\"token property\">\"label\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"Row 4\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"rol\"</span><span class=\"token operator\">:</span> <span class=\"token number\">4</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        <span class=\"token property\">\"label\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"Row 5\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"rol\"</span><span class=\"token operator\">:</span> <span class=\"token number\">5</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        <span class=\"token property\">\"label\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"Row 6\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"rol\"</span><span class=\"token operator\">:</span> <span class=\"token number\">6</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">]</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n</code></pre>\n<h3><a class=\"anchor\" name=\"column-%E6%A8%A1%E5%BC%8F\" href=\"#column-%E6%A8%A1%E5%BC%8F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>column 模式</h3><p>默认为 column 模式，即每列只能单选某个单元格</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n  \"body\": [\n    {\n      \"type\": \"matrix-checkboxes\",\n      \"name\": \"matrix\",\n      \"label\": \"Matrix\",\n      \"rowLabel\": \"行标题说明\",\n      \"multiple\": false,\n      \"columns\": [\n        {\n          \"label\": \"列1\"\n        },\n        {\n          \"label\": \"列2\"\n        }\n      ],\n      \"rows\": [\n        {\n          \"label\": \"行1\"\n        },\n        {\n          \"label\": \"行2\"\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h3><a class=\"anchor\" name=\"cell-%E6%A8%A1%E5%BC%8F\" href=\"#cell-%E6%A8%A1%E5%BC%8F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>cell 模式</h3><p>cell 模式，指全部选项中只能单选某个单元格</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n  \"body\": [\n    {\n      \"type\": \"matrix-checkboxes\",\n      \"name\": \"matrix\",\n      \"label\": \"Matrix\",\n      \"rowLabel\": \"行标题说明\",\n      \"multiple\": false,\n      \"singleSelectMode\": \"cell\",\n      \"columns\": [\n        {\n          \"label\": \"列1\"\n        },\n        {\n          \"label\": \"列2\"\n        }\n      ],\n      \"rows\": [\n        {\n          \"label\": \"行1\"\n        },\n        {\n          \"label\": \"行2\"\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h3><a class=\"anchor\" name=\"row-%E6%A8%A1%E5%BC%8F\" href=\"#row-%E6%A8%A1%E5%BC%8F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>row 模式</h3><p>row 模式，每行只能单选某个单元格</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n  \"body\": [\n    {\n      \"type\": \"matrix-checkboxes\",\n      \"name\": \"matrix\",\n      \"label\": \"Matrix\",\n      \"rowLabel\": \"行标题说明\",\n      \"multiple\": false,\n      \"singleSelectMode\": \"row\",\n      \"columns\": [\n        {\n          \"label\": \"列1\"\n        },\n        {\n          \"label\": \"列2\"\n        }\n      ],\n      \"rows\": [\n        {\n          \"label\": \"行1\"\n        },\n        {\n          \"label\": \"行2\"\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>属性表</h2><p>除了支持 <a href=\"./formitem#%E5%B1%9E%E6%80%A7%E8%A1%A8\">普通表单项属性表</a> 中的配置以外，还支持下面一些配置</p>\n<table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>columns</td>\n<td><code>Array&lt;column&gt;</code></td>\n<td></td>\n<td>列信息，数组中 <code>label</code> 字段是必须给出的</td>\n</tr>\n<tr>\n<td>rows</td>\n<td><code>Array&lt;row&gt;</code></td>\n<td></td>\n<td>行信息， 数组中 <code>label</code> 字段是必须给出的</td>\n</tr>\n<tr>\n<td>rowLabel</td>\n<td><code>string</code></td>\n<td></td>\n<td>行标题说明</td>\n</tr>\n<tr>\n<td>source</td>\n<td><a href=\"../../../docs/types/api\">API</a></td>\n<td></td>\n<td>Api 地址，如果选项组不固定，可以通过配置 <code>source</code> 动态拉取。</td>\n</tr>\n<tr>\n<td>multiple</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n<td>是否多选</td>\n</tr>\n<tr>\n<td>singleSelectMode</td>\n<td><code>string</code></td>\n<td><code>&quot;column&quot;</code></td>\n<td>设置单选模式，<code>multiple</code>为<code>false</code>时有效，可设置为<code>cell</code>, <code>row</code>, <code>column</code> 分别为全部选项中只能单选某个单元格、每行只能单选某个单元格，每列只能单选某个单元格</td>\n</tr>\n<tr>\n<td>textAlign</td>\n<td><code>string</code></td>\n<td><code>&quot;center&quot;</code></td>\n<td>当开启多选+全选时，默认为&#39;left&#39;</td>\n</tr>\n<tr>\n<td>yCheckAll</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>列上的全选</td>\n</tr>\n<tr>\n<td>xCheckAll</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>行上的全选</td>\n</tr>\n</tbody></table>\n<h2><a class=\"anchor\" name=\"%E4%BA%8B%E4%BB%B6%E8%A1%A8\" href=\"#%E4%BA%8B%E4%BB%B6%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>事件表</h2><p>当前组件会对外派发以下事件，可以通过<code>onEvent</code>来监听这些事件，并通过<code>actions</code>来配置执行的动作，在<code>actions</code>中可以通过<code>${事件参数名}</code>或<code>${event.data.[事件参数名]}</code>来获取事件产生的数据，详细请查看<a href=\"../../docs/concepts/event-action\">事件动作</a>。</p>\n<blockquote>\n<p><code>[name]</code>表示当前组件绑定的名称，即<code>name</code>属性，如果没有配置<code>name</code>属性，则通过<code>value</code>取值。</p>\n</blockquote>\n<table>\n<thead>\n<tr>\n<th>事件名称</th>\n<th>事件参数</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>change</td>\n<td><code>[name]: Array</code> 组件的值</td>\n<td>选中值变化时触发</td>\n</tr>\n</tbody></table>\n<h3><a class=\"anchor\" name=\"change\" href=\"#change\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>change</h3></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"body\": [\n      {\n        \"type\": \"matrix-checkboxes\",\n        \"name\": \"matrix\",\n        \"label\": \"Matrix\",\n        \"rowLabel\": \"行标题说明\",\n        \"columns\": [\n          {\n            \"label\": \"列1\"\n          },\n          {\n            \"label\": \"列2\"\n          }\n        ],\n        \"rows\": [\n          {\n            \"label\": \"行1\"\n          },\n          {\n            \"label\": \"行2\"\n          }\n        ],\n        \"onEvent\": {\n          \"change\": {\n            \"actions\": [\n              {\n                \"actionType\": \"toast\",\n                \"args\": {\n                  \"msg\": \"${event.data.value|json}\"\n                }\n              }\n            ]\n          }\n        }\n      }\n    ]\n  }\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%8A%A8%E4%BD%9C%E8%A1%A8\" href=\"#%E5%8A%A8%E4%BD%9C%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>动作表</h2><p>当前组件对外暴露以下特性动作，其他组件可以通过指定<code>actionType: 动作名称</code>、<code>componentId: 该组件id</code>来触发这些动作，动作配置可以通过<code>args: {动作配置项名称: xxx}</code>来配置具体的参数，详细请查看<a href=\"../../docs/concepts/event-action#触发其他组件的动作\">事件动作</a>。</p>\n<table>\n<thead>\n<tr>\n<th>动作名称</th>\n<th>动作配置</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>clear</td>\n<td>-</td>\n<td>清空</td>\n</tr>\n<tr>\n<td>reset</td>\n<td>-</td>\n<td>将值重置为初始值。6.3.0 及以下版本为<code>resetValue</code></td>\n</tr>\n<tr>\n<td>reload</td>\n<td>-</td>\n<td>重新加载，调用 <code>source</code>，刷新数据域数据刷新（重新加载）</td>\n</tr>\n<tr>\n<td>setValue</td>\n<td><code>value: Array</code> 更新的值</td>\n<td>更新数据</td>\n</tr>\n</tbody></table>\n<h3><a class=\"anchor\" name=\"clear\" href=\"#clear\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>clear</h3></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"body\": [\n        {\n          \"type\": \"matrix-checkboxes\",\n          \"name\": \"matrix\",\n          \"label\": \"Matrix\",\n          \"rowLabel\": \"行标题说明\",\n          \"columns\": [\n            {\n              \"label\": \"列1\"\n            },\n            {\n              \"label\": \"列2\"\n            }\n          ],\n          \"rows\": [\n            {\n              \"label\": \"行1\"\n            },\n            {\n              \"label\": \"行2\"\n            }\n          ],\n          \"value\": [\n            [\n              {\n                \"label\": \"列1\",\n                \"checked\": true\n              },\n              {\n                \"label\": \"列1\",\n                \"checked\": false\n              }\n            ],\n            [\n              {\n                \"label\": \"列2\",\n                \"checked\": false\n              },\n              {\n                \"label\": \"列2\",\n                \"checked\": true\n              }\n            ]\n          ],\n          \"id\": \"clear_text\"\n        },\n        {\n            \"type\": \"button\",\n            \"label\": \"清空\",\n            \"onEvent\": {\n                \"click\": {\n                    \"actions\": [\n                        {\n                            \"actionType\": \"clear\",\n                            \"componentId\": \"clear_text\"\n                        }\n                    ]\n                }\n            }\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h3><a class=\"anchor\" name=\"reset\" href=\"#reset\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>reset</h3><p>如果配置了<code>resetValue</code>，则重置时使用<code>resetValue</code>的值，否则使用初始值。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"body\": [\n        {\n          \"type\": \"matrix-checkboxes\",\n          \"name\": \"matrix\",\n          \"label\": \"Matrix\",\n          \"rowLabel\": \"行标题说明\",\n          \"columns\": [\n            {\n              \"label\": \"列1\"\n            },\n            {\n              \"label\": \"列2\"\n            }\n          ],\n          \"rows\": [\n            {\n              \"label\": \"行1\"\n            },\n            {\n              \"label\": \"行2\"\n            }\n          ],\n          \"value\": [\n            [\n              {\n                \"label\": \"列1\",\n                \"checked\": true\n              },\n              {\n                \"label\": \"列1\",\n                \"checked\": false\n              }\n            ],\n            [\n              {\n                \"label\": \"列2\",\n                \"checked\": false\n              },\n              {\n                \"label\": \"列2\",\n                \"checked\": true\n              }\n            ]\n          ],\n          \"id\": \"reset_text\"\n        },\n        {\n            \"type\": \"button\",\n            \"label\": \"重置\",\n            \"onEvent\": {\n                \"click\": {\n                    \"actions\": [\n                        {\n                            \"actionType\": \"reset\",\n                            \"componentId\": \"reset_text\"\n                        }\n                    ]\n                }\n            }\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h3><a class=\"anchor\" name=\"reload\" href=\"#reload\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>reload</h3><p>只有选择器模式支持，即配置<code>source</code>，用于重新加载选择器的数据源。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"body\": [\n        {\n          \"type\": \"list-select\",\n          \"name\": \"select\",\n          \"label\": \"单选\",\n          \"clearable\": true,\n          \"id\": \"reload_type\",\n          \"source\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/getOptions?waitSeconds=1\",\n          \"value\": \"a\"\n        },\n        {\n            \"type\": \"button\",\n            \"label\": \"重新加载\",\n            \"onEvent\": {\n                \"click\": {\n                    \"actions\": [\n                        {\n                            \"actionType\": \"reload\",\n                            \"componentId\": \"reload_type\"\n                        }\n                    ]\n                }\n            }\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h3><a class=\"anchor\" name=\"setvalue\" href=\"#setvalue\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>setValue</h3></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"body\": [\n        {\n          \"type\": \"matrix-checkboxes\",\n          \"name\": \"matrix\",\n          \"label\": \"Matrix\",\n          \"rowLabel\": \"行标题说明\",\n          \"columns\": [\n            {\n              \"label\": \"列1\"\n            },\n            {\n              \"label\": \"列2\"\n            }\n          ],\n          \"rows\": [\n            {\n              \"label\": \"行1\"\n            },\n            {\n              \"label\": \"行2\"\n            }\n          ],\n          \"value\": \"a\",\n          \"id\": \"setvalue_text\"\n        },\n        {\n            \"type\": \"button\",\n            \"label\": \"赋值\",\n            \"onEvent\": {\n                \"click\": {\n                    \"actions\": [\n                        {\n                            \"actionType\": \"setValue\",\n                            \"componentId\": \"setvalue_text\",\n                            \"args\": {\n                                \"value\": [\n                                  [\n                                    {\n                                      \"label\": \"列1\",\n                                      \"checked\": true\n                                    },\n                                    {\n                                      \"label\": \"列1\",\n                                      \"checked\": true\n                                    }\n                                  ],\n                                  [\n                                    {\n                                      \"label\": \"列2\",\n                                      \"checked\": false\n                                    },\n                                    {\n                                      \"label\": \"列2\",\n                                      \"checked\": true\n                                    }\n                                  ]\n                                ]\n                            }\n                        }\n                    ]\n                }\n            }\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "基本用法",
          "fragment": "%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "fullPath": "#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "level": 2
        },
        {
          "label": "全选",
          "fragment": "%E5%85%A8%E9%80%89",
          "fullPath": "#%E5%85%A8%E9%80%89",
          "level": 2
        },
        {
          "label": "单选模式",
          "fragment": "%E5%8D%95%E9%80%89%E6%A8%A1%E5%BC%8F",
          "fullPath": "#%E5%8D%95%E9%80%89%E6%A8%A1%E5%BC%8F",
          "level": 2
        },
        {
          "label": "动态选项",
          "fragment": "%E5%8A%A8%E6%80%81%E9%80%89%E9%A1%B9",
          "fullPath": "#%E5%8A%A8%E6%80%81%E9%80%89%E9%A1%B9",
          "level": 2,
          "children": [
            {
              "label": "column 模式",
              "fragment": "column-%E6%A8%A1%E5%BC%8F",
              "fullPath": "#column-%E6%A8%A1%E5%BC%8F",
              "level": 3
            },
            {
              "label": "cell 模式",
              "fragment": "cell-%E6%A8%A1%E5%BC%8F",
              "fullPath": "#cell-%E6%A8%A1%E5%BC%8F",
              "level": 3
            },
            {
              "label": "row 模式",
              "fragment": "row-%E6%A8%A1%E5%BC%8F",
              "fullPath": "#row-%E6%A8%A1%E5%BC%8F",
              "level": 3
            }
          ]
        },
        {
          "label": "属性表",
          "fragment": "%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "fullPath": "#%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "level": 2
        },
        {
          "label": "事件表",
          "fragment": "%E4%BA%8B%E4%BB%B6%E8%A1%A8",
          "fullPath": "#%E4%BA%8B%E4%BB%B6%E8%A1%A8",
          "level": 2,
          "children": [
            {
              "label": "change",
              "fragment": "change",
              "fullPath": "#change",
              "level": 3
            }
          ]
        },
        {
          "label": "动作表",
          "fragment": "%E5%8A%A8%E4%BD%9C%E8%A1%A8",
          "fullPath": "#%E5%8A%A8%E4%BD%9C%E8%A1%A8",
          "level": 2,
          "children": [
            {
              "label": "clear",
              "fragment": "clear",
              "fullPath": "#clear",
              "level": 3
            },
            {
              "label": "reset",
              "fragment": "reset",
              "fullPath": "#reset",
              "level": 3
            },
            {
              "label": "reload",
              "fragment": "reload",
              "fullPath": "#reload",
              "level": 3
            },
            {
              "label": "setValue",
              "fragment": "setvalue",
              "fullPath": "#setvalue",
              "level": 3
            }
          ]
        }
      ],
      "level": 0
    }
  };

});