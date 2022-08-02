
<!DOCTYPE html>
<html lang="en">
	<!-- prettier-ignore -->
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="shortcut icon" href="assets/favicon.png" />
		<title>Bigger Picture - JavaScript lightbox gallery</title>
		<link rel="stylesheet" href="css/demo.css" />
		<meta name="description" content="High performance lightbox script with a small footprint. Supports images, video, audio, iframes, and html. No plugins necessary.">
		<meta itemprop="name" content="Bigger Picture - JavaScript lightbox gallery">
		<meta itemprop="description" content="High performance lightbox script with a small footprint. Supports images, video, audio, iframes, and html. No plugins necessary.">
		<meta itemprop="image" content="https://assets.henrygd.me/bp/images/bp-social.png">
		<meta property="og:url" content="https://biggerpicture.henrygd.me">
		<meta property="og:type" content="website">
		<meta property="og:title" content="Bigger Picture - JavaScript lightbox gallery">
		<meta property="og:description" content="High performance lightbox script with a small footprint. Supports images, video, audio, iframes, and html. No plugins necessary.">
		<meta property="og:image" content="https://assets.henrygd.me/bp/images/bp-social.png">
		<meta name="twitter:card" content="summary_large_image">
		<meta name="twitter:title" content="Bigger Picture - JavaScript lightbox gallery">
		<meta name="twitter:description" content="High performance lightbox script with a small footprint. Supports images, video, audio, iframes, and html. No plugins necessary.">
		<meta name="twitter:image" content="https://assets.henrygd.me/bp/images/bp-social.png">
	</head>

	<body>
		
		<main>
            <h1>The video is on the top, so user do NOT need scroll down the browser. At this situation, the mobile browser tab will show!</h1>
			<div class="sections">
			
				<section>
					<div class="main">
						<div class="inner-wrap">
							
							<ul class="masonry section-example" id="vids">
								
								<li>
									<a
										class="yt"
										href="https://www.youtube.com/watch?v=286jXjwdst0"
										data-iframe="https://www.youtube.com/embed/286jXjwdst0?autoplay=1&playsinline=1"
										data-height="1012"
										data-thumb="https://assets.henrygd.me/bp/images/uebok.jpg"
										data-title="Uebok youtube embed"
										target="_blank"
										title="Youtube embed"
										><span style="padding-bottom: 52.708%"></span>
										<img
											src="https://assets.henrygd.me/bp/images/uebok.jpg"
											alt="Uebok youtube embed"
										/>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</section>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia nemo dolore accusantium ea, corporis dolor, facilis aperiam molestiae nobis laborum facere omnis. Fuga cumque nemo pariatur laboriosam rem dignissimos vero. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab delectus molestias similique impedit exercitationem odio, explicabo iste totam quidem consequatur ipsa. Ipsam minus sit dolore natus praesentium dolorum quasi, ex quis iusto recusandae perferendis? Ratione autem quod repudiandae animi laudantium eligendi fugiat adipisci quis excepturi unde molestias, esse cum id minus explicabo voluptatem suscipit alias perferendis reprehenderit. Nobis libero doloribus facilis ipsam necessitatibus doloremque ex dolores cumque quidem odit. Impedit ut, molestiae tenetur neque aut odio asperiores et accusantium cupiditate tempora maiores quaerat suscipit vero laborum, porro reiciendis? Ducimus excepturi magni quos facere unde ab accusamus suscipit, tenetur consectetur eaque voluptatibus est! Mollitia distinctio sequi non laborum maiores, itaque nemo quisquam reiciendis accusamus. Quis, officiis nulla est numquam, vero eum dolore fuga quo nisi beatae explicabo! Repellat numquam hic quasi quam consequatur repellendus tempore vel dolor cum ratione, nisi quos vitae laboriosam cupiditate? Totam enim, aspernatur adipisci quisquam ut cupiditate dolores. Dolore quae voluptate animi, sapiente omnis distinctio autem velit ipsa. Est porro quam ut iure praesentium in corporis. Assumenda, dignissimos magni deleniti delectus eligendi nihil distinctio minus voluptates! Deserunt eligendi, voluptate sit numquam totam at corrupti enim dolorem ex sint laborum nisi harum cum cupiditate porro quasi tenetur repellat?
			</div>
		</main>

		<footer>
			<div class="main">
				<div class="inner-wrap">
					<p>
						Agent 327: Operation Barbershop by Blender Studio (<a
							href="https://creativecommons.org/licenses/by-nd/2.0/"
							>CC BY-ND</a
						>)
					</p>
				</div>
			</div>
		</footer>

		<!-- bp html stuff -->
		<div id="code_image_gallery" class="hide code-example">
			<div>
				<h3>Image Gallery Example Code</h3>
				<p>
					There are two methods of supplying data -- JavaScript objects and
					<code>data-*</code> attributes. The example below uses the latter
					method. Event listeners are set up to open BiggerPicture when a link
					is clicked.
				</p>
				<a
					href="https://codesandbox.io/s/bigger-picture-basic-gallery-o4kb82"
					target="_blank"
				>
					<img
						alt="Edit bigger-picture-basic-gallery"
						height="40"
						src="https://codesandbox.io/static/img/play-codesandbox.svg"
					/>
				</a>
				<pre
					class="language-html"
					tabindex="0"
				><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>"images"</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span>
		<span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>"example.jpg"</span>
		<span class="token attr-name">data-img</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>"example.jpg"</span>
		<span class="token attr-name">data-thumb</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>"example-thumb.jpg"</span>
		<span class="token attr-name">data-alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>"image description"</span>
		<span class="token attr-name">data-height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>"2000"</span>
		<span class="token attr-name">data-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>"3000"</span>
	<span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span>
			<span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>"example-thumb.jpg"</span>
			<span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>"image description"</span>
		<span class="token punctuation">/&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></code>
</pre>
				<pre
					class="language-javascript"
					tabindex="0"
				><code class="language-javascript"><span class="token comment">// initialize</span>
<span class="token keyword">let</span> bp <span class="token operator">=</span> <span class="token function">BiggerPicture</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">target</span><span class="token operator">:</span> document<span class="token punctuation">.</span>body<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// grab image links</span>
<span class="token keyword">let</span> imageLinks <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">'#images &gt; a'</span><span class="token punctuation">)</span>

<span class="token comment">// add click listener to open BiggerPicture</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> link <span class="token keyword">of</span> imageLinks<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  link<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> openGallery<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// function to open BiggerPicture</span>
<span class="token keyword">function</span> <span class="token function">openGallery</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	bp<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
		<span class="token literal-property property">items</span><span class="token operator">:</span> imageLinks<span class="token punctuation">,</span>
		<span class="token literal-property property">el</span><span class="token operator">:</span> e<span class="token punctuation">.</span>currentTarget<span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code>
</pre>
			</div>
		</div>

		<div id="code_vid_gallery" class="hide code-example">
			<div>
				<h3>Video / Embed Example Code</h3>
				<p>
					Like the the image gallery example, the code below uses data
					attributes on link elements to pass data to BiggerPicture when a link
					is clicked. Instead of a gallery, we just open them on their own by
					passing the individual node.
				</p>
				<p>
					For native video and audio, you must provide <code>sources</code> --
					an array of objects indicating a
					<a
						href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source#attr-src"
						><code>src</code></a
					>
					and
					<a
						href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source#attr-type"
						><code>type</code></a
					>
					(mime). A string may be used if it is JSON parsable. Each object will
					create a &ltsource&gt element, and all key-value pairs in the object
					will be added as attributes.
				</p>
				<p>
					Videos have a <code>tracks</code> option allowing you to add captions,
					which you can see in use below.
				</p>
				<p>
					Note: Width / height defaults to 1920 / 1080, so those attributes
					aren't necessary, but are left in for clarity.
				</p>
				<a
					href="https://codesandbox.io/s/bigger-picture-video-and-embed-8vmr1y"
					target="_blank"
				>
					<img
						alt="Edit bigger-picture-basic-gallery"
						height="40"
						src="https://codesandbox.io/static/img/play-codesandbox.svg"
					/>
				</a>
				<pre
					class="language-html"
					tabindex="0"
				><code><span class="token comment">&lt;!-- video --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span>
	<span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>"example.mp4"</span>
	<span class="token attr-name">data-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>"1920"</span>
	<span class="token attr-name">data-height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>"1080"</span>
	<span class="token attr-name">data-thumb</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>"thumb.jpg"</span>
	<span class="token attr-name">data-sources</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>'[{"src": "example.webm", "type": "video/webm"}, {"src": "example.mp4", "type": "video/mp4"}]'</span>
	<span class="token attr-name">data-tracks</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>'[{"label": "English", "kind": "subtitles", "srclang": "en", "src": "en.vtt", "default": "true"}, {"label": "Español", "kind": "subtitles", "srclang": "es", "src": "es.vtt"}]'</span>
<span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span>
		<span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>"thumb.jpg"</span>
		<span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>"video description"</span>
	<span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- iframe embed --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span>
	<span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>"https://www.youtube.com/watch?v=286jXjwdst0"</span>
	<span class="token attr-name">data-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>"1920"</span>
	<span class="token attr-name">data-height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>"1012"</span>
	<span class="token attr-name">data-thumb</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>"images/uebok.jpg"</span>
	<span class="token attr-name">data-iframe</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>"https://www.youtube.com/embed/286jXjwdst0?autoplay=1&amp;playsinline=1"</span>
<span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span>
		<span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>"images/uebok.jpg"</span>
		<span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>"Uebok youtube embed"</span>
	<span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span></code>
</pre>
				<pre class="language-javascript"><code class="language-javascript"><span class="token comment">// initialize BiggerPicture</span>
<span class="token keyword">let</span> bp <span class="token operator">=</span> <span class="token function">BiggerPicture</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">target</span><span class="token operator">:</span> document<span class="token punctuation">.</span>body
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// grab image links</span>
<span class="token keyword">let</span> links <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">"a"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// add click listener on links to open BiggerPicture</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> link <span class="token keyword">of</span> links<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  link<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> openBiggerPicture<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// function to open BiggerPicture</span>
<span class="token keyword">function</span> <span class="token function">openBiggerPicture</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  bp<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">items</span><span class="token operator">:</span> e<span class="token punctuation">.</span>currentTarget<span class="token punctuation">,</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span> e<span class="token punctuation">.</span>currentTarget
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span></code>
</pre>
			</div>
		</div>

		<div id="code_inline" class="hide code-example">
			<div>
				<h3>Inline Gallery Example Code</h3>
				<p>
					The example below supplies data to BiggerPicture using a JavaScript
					object.
				</p>
				<p>
					To create an inline gallery, use the <code>inline</code> option.
					You'll probably want to set the <code>scale</code>,
					<code>intro</code>, and <code>noClose</code> options like below.
				</p>
				<a
					href="https://codesandbox.io/s/bigger-picture-inline-gallery-zl8p2n"
					target="_blank"
				>
					<img
						alt="Edit bigger-picture-basic-gallery"
						height="40"
						src="https://codesandbox.io/static/img/play-codesandbox.svg"
					/>
				</a>
				<pre
					class="language-html"
					tabindex="0"
				><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>"inline"</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>"inline-gallery"</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></code>
</pre>
				<pre
					class="language-javascript"
					tabindex="0"
				><code class="language-javascript"><span class="token comment">// example data</span>
<span class="token keyword">let</span> items <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">img</span><span class="token operator">:</span> <span class="token string">"https://assets.henrygd.me/bp/images/janko-ferlic-SDivo1PTBDs-unsplash.jpg"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">thumb</span><span class="token operator">:</span> <span class="token string">"https://assets.henrygd.me/bp/images/janko-ferlic-SDivo1PTBDs-unsplash_thumb.jpg"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">"2000"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">"3000"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">alt</span><span class="token operator">:</span> <span class="token string">"wildlife photography of brown bear cub"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">img</span><span class="token operator">:</span> <span class="token string">"https://assets.henrygd.me/bp/images/corey-agopian-5y4ljzRrDFA-unsplash.jpg"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">thumb</span><span class="token operator">:</span> <span class="token string">"https://assets.henrygd.me/bp/images/corey-agopian-5y4ljzRrDFA-unsplash_thumb.jpg"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">"2000"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">"3000"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">alt</span><span class="token operator">:</span> <span class="token string">"palm trees under clear blue sky"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// initialize BiggerPicture</span>
<span class="token keyword">let</span> bp <span class="token operator">=</span> <span class="token function">BiggerPicture</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">target</span><span class="token operator">:</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"inline"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// open inline gallery</span>
bp<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  items<span class="token punctuation">,</span>
  <span class="token literal-property property">inline</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">scale</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">intro</span><span class="token operator">:</span> <span class="token string">"fadeup"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">noClose</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>
</pre>
			</div>
		</div>

		<div id="code_responsive" class="hide code-example">
			<div>
				<h3>Responsive Image Example Code</h3>
				<p>
					All you have to do is pass a <code>srcset</code> value as
					<code>img</code>. The <code>sizes</code> attribute is automatically
					updated whenever the image dimensions change. Alternatively, you may
					set your own <code>sizes</code> value.
				</p>
				<p>The map example uses three sizes: 1300, 2500, and 6000 pixels.</p>
				<p>
					The 1300px image will be displayed as the starting image on small
					screens.
				</p>
				<p>
					The 2500px image will be loaded as the starting image on most laptops
					/ desktops, or if a user zooms past the 1300px size.
				</p>
				<p>
					The 6000px image will be loaded as the starting image on very high
					resolution monitors, or if a user zooms past the 2500px size.
				</p>
				<pre
					class="language-html"
					tabindex="0"
				><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span>
	<span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>"images/exandria-2500.webp"</span>
	<span class="token attr-name">data-img</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>"images/exandria-1300.webp 1300w, images/exandria-2500.webp 2500w, images/exandria-6000.webp 6000w"</span>
	<span class="token attr-name">data-thumb</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>"images/exandria-1300.webp"</span>
	<span class="token attr-name">data-height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>"3376"</span>
	<span class="token attr-name">data-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>"6000"</span>
	<span class="token attr-name">data-alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>"map of critical role's exandria"</span>
	<span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span>
		<span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>"images/exandria-1300.webp"</span>
		<span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>"map of critical role's exandria"</span>
	<span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span></code>
</pre>
			</div>
		</div>

		<script>
			if (!('ResizeObserver' in window)) {
				document.write(
					'<script src="https://cdn.jsdelivr.net/combine/npm/intersection-observer@0.12.0/intersection-observer.min.js,npm/@juggle/resize-observer@4.0.0-4/lib/resize-observer.min.js"><\/script>'
				)
			}
		</script>

		<script src="js/demo.js"></script>
	</body>
</html>
