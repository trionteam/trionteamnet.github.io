---
name: Projekt 5410
sequence: 1
layout: page
short: A top-down scrolling shoot-em-up game in the tradition of Xenon II. This
       is the first project we started... and didn't finish yet.
image: /image/projekt-5410/projekt-5410-icon.png
---
Projekt 5410 is the first project we ever started in our team and the reason
why we started working together in the first place. At that time, one of our
favorite games was [Raptor: Call of the
Shadows](https://en.wikipedia.org/wiki/Raptor:_Call_of_the_Shadows). By then it
was already six years old, and we feared that games like this are not made
anymore. So we decided to make our own. Of course, in hi-res and with modern
graphics.

<div class="images">
  {% include image.html thumb="/image/projekt-5410/sansafan-small.png"
                        url="/image/projekt-5410/sansafan.png" %}
  {% include image.html thumb="/image/projekt-5410/tank-01-small.jpg"
                        url="/image/projekt-5410/tank-01.jpg" %}
</div>

The very first version was supposed to be in 2D with SVGA graphics. But we had
very little experience with game development - or with projects of this size,
so we did not get very far. We built some tools and a couple of sprites, but we
did not make any progress in turning it into an actual game. And we got
distracted by all the other game ideas we had and started putting most of our
time and energy into [Ponorka]({{ "/projects/ponorka.html" | relative_url }}).

<div class="images">
  {% include image.html thumb="/image/projekt-5410/tank-02-small.jpg"
                        url="/image/projekt-5410/tank-02.jpg" %}
  {% include image.html thumb="/image/projekt-5410/tank-03-small.jpg"
                        url="/image/projekt-5410/tank-03.jpg" %}
  {% include image.html thumb="/image/projekt-5410/ships-small.png"
                        url="/image/projekt-5410/ships.png" %}
</div>

When Ponorka was completed, we were really tired of building a 2D game where
everything had to be done with pixel precision. So we decided to start from
scratch and build Projekt 5410 in 3D. We had very little experience with
building 3D games, but that couldn't stop us. We investigated a couple of
open-source 3D engines (remember, this was long before Unity), but they were
all built for FPS games and had little to none support for the large outdoor
environments we needed. So we decided to build our own.

<div class="images">
  {% include image.html thumb="/image/projekt-5410/engine-01-small.jpg"
                        url="/image/projekt-5410/engine-01.jpg" %}
  {% include image.html thumb="/image/projekt-5410/engine-02-small.jpg"
                        url="/image/projekt-5410/engine-02.jpg" %}
  {% include image.html thumb="/image/projekt-5410/engine-03-small.jpg"
                        url="/image/projekt-5410/engine-03.jpg" %}
</div>

This time, we got quite far with the tech. The 3D engine worked and supported
the type of environment we needed. We had textures and particle effects. We
even built a LISP-like scripting language for coding the missions. But we still
had no plans for turning all this into a consistent game, and when Tom moved
around the country to join the army, the development halted.

<div class="images">
  {% include image.html thumb="/image/projekt-5410/cutout-01-small.png"
                        url="/image/projekt-5410/cutout-01.png" %}
  {% include image.html thumb="/image/projekt-5410/cutout-02-small.png"
                        url="/image/projekt-5410/cutout-02.png" %}
</div>

In 2019, we decided to get back to this game once more. We replaced the custom
engine with Unity and drastically reduce the scope of what we want to build.
And we hope that this time, we'll see the project through to a release.
