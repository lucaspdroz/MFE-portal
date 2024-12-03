# MFE - Shell with sharing store (state)

project: [lucaspdroz.github.io/MFE-header/](lucaspdroz.github.io/MFE-header/)
MFE Deployment: [https://mfe-header-two.vercel.app/](https://mfe-header-two.vercel.app/)

## What is MFE?

The MFE or Micro Front Ends are a compiled static front end from a library (react, solidjs, vue, etc) that when converted to JS, can be embeded into a web page.

## Module Federation (Standard)

Standard tho share this components trhu the web, and the `remoteEntry.js` is a manifest, that means the "way the can talk in every language"

## How does it work?

![Archtecture](https://raw.githubusercontent.com/lucaspdroz/MFE-portal/refs/heads/main/Archtecture.png)

- Our Host Shares and consumes his own state
- The Header MFE consumes the Host, but it can interact with it too.
- I Personally choose the [Zustand Library](https://zustand-demo.pmnd.rs/) because it's a **Store Based State Manager**, that means this feature minimizes unnecessary re-renders, making feel efficient like atomic state managers.

Other awesome options to use:

- Redux, MobX.

or atomic ones like (simplier, but not so expansible):

- recoil and Jotai.
