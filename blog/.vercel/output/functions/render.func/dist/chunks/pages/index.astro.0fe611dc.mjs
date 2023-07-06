/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../astro.bc1e62c4.mjs';
import 'html-escaper';
import { $ as $$DefaultLayout } from './2023-07-04-project-announcement.md.a54c33d0.mjs';
import 'cookie';
import 'kleur/colors';
import 'path-to-regexp';
import 'mime';
import 'string-width';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<!-- Landing Page -->${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "Mark Topacio" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead($$result2)}<div>
		<div class="flex flex-row h-full w-full justify-center pt-10">
			Hi! My name is Mark, and I work as a Process Engineer at Illumina focused on manufacturing.
		</div>
		<div id="background-plot"></div>
	</div>
	
` })}`;
}, "/home/mtopacio/Git/blog/blog/src/pages/index.astro");

const $$file = "/home/mtopacio/Git/blog/blog/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
