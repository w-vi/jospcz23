---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://source.unsplash.com/collection/94734566/1920x1080
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# persist drawings in exports and build
drawings:
  persist: false
---

# Smartphone bez Google/Apple

Vilibald Wanča

vilibald@wvi.cz

masto: @wvi@witter.cz

---
layout: image-right
image: /dr_face.png
---

## Vilibald

> Basic->Pascal->asm->C->Js->Py->Lisp->Go-> ...

- 20+ let programování za peníze
- 30 000+ km najeto na furtošlapu
- ~1200 km nejdelší procházka
- 800+ vinylů v kolekci

---

# Kvíz

<div v-click>
Kolik OS pro smartphone nemá Linux jako kernel?
</div>

<div v-click class="text-xl p-2">
1 - iOS (Darwin)
</div>

<div v-click>
Kdo první použil Linux jako kernel pro mobilní OS?
</div>

<div v-click class="text-xl p-2">
Motorola A760 v 2003
</div>

---
layout: two-cols
---

# Stručná historie od 2000

* 2000 - Symbian OS
* 2002 - Windoes CE (Pocket PC)
* 2002 - Bleckberry
* 2003 - Linux MontaVista (Motorola A760)
* 2003 - Android - původně pro kamery a pod
* 2005 - Winndows Mobile
* 2005 - Maemo OS - Debian základ od Nokia
* 2005 - Android -  už jako Google adoptuje Linux
* 2007 - iPhone OS
* 2007 - Intel Moblin - základ je RPM
* 2008 - Android 1.0 HTC Dream
* 2009 - Poslední Palm OS

::right::

* 2010 - MeeGo - Maemo + Moblin v Linux Foundation
* 2010 - Bada OS - Samsung
* 2010 - Windows Phone
* 2011 - Firefox OS
* 2011 - MeeGO + Samsung Bada -> Tizen
* 2011 - Mer - MeeGo fork na rpm od ex. Nokia
* 2012 - Symbian OS končí
* 2013 - Ubuntu Touch
* 2013 - SailfishOS - Jolla (ex Nokia)
* 2015 - Konec BlackBerry
* 2016 - Konec Windows Phone
* 2017 - KaiOS - Firefox OS revival pro feature phone
* 2019 - Harmony OS - Huawei (není Android)
* 2019 - Pure OS Librem 5 - Purism - Debian based

---

# Jak to vypadá teď?

- Andriod má 71% - většina je Google connected
- Apple má 27%
- HarmonyOS - 2% - Čína
- Tizen - 0.22%
- KaiOS - 0.15%

---

# Linux distro na telefonu?

- postmarketOS - Alpine
- PureOS - Debian
- Mobian - Debian
- SailfishOS - rpm
- Ubuntu Touch - Ubuntu

---
layout: image-right
image: https://pine64eu.com/wp-content/uploads/2022/02/PPBetaEdition-1.png
---
# PinePhone

- Mainline kernel
- A53 Cortext ARM
- beží tam skoro cokoli
- Manjaro ARM nebo postmarketOS

Seznam podporovaných distribucí : https://wiki.pine64.org/wiki/PinePhone_Software_Releases

---
layout: image-left
image: https://wiki.postmarketos.org/images/e/e3/Phosh_homescreen.png
---
# Phosh - GNOME Phone Shell

- Purism pro PureOS na Librem 5
- 2018 první release
- GNOME pro mobilní zařízení

---
layout: image-right
image: https://plasma-mobile.org/img/plasmaphone.svg
---
# Plasma Mobile

- KDE pro mobilní zařízení
- vývoj od 2015

---
layout: image-right
image: https://sailfishos.org/content/uploads/2021/02/Phone-Water-210-20_9.jpg
---
# Sailfish OS

- Základ je Mer, tj distro na rpm s Wayland a systemd - FOSS
- Jolla UI - proprietární
- omezený zařízení
- vetšína vývoje jde do vládních zařízeni

---
layout: image-left
image: https://puri.sm/wp-content/uploads/2019/03/web-on-devices-1024x576.png
---
# Librem 5

- Purism zařízení s Pure OS
- Phosh
- Omezené aplikace, ale nabízí kovergenci
- Pureboot - Coreboot + minimální ME + TPM chip
- Ubuntu Touch a další jdu také použít -> Pure OS je FOSS

---
layout: center
---
# Použitelnost

- Linux distro se vším všudy
- Umí základní věci jako volání, SMS atd

- Klasický android appky se dají přes Waydroid, ale ...
- je to asi něco jako Linux na desktopu :D

---
layout: center
---

# Android bez Google?

AOSP - Android Open Source Project

---
layout: center
---
# A reálně?

- LineageOS
- GrapheneOS
- /e/OS
- CalyxOS

---
layout: image-right
image: https://www.bouncegeek.com/wp-content/uploads/2021/03/Install-LineageOS-on-PC-Dual-Boot.jpg
---

# LineageOS

- Kanonický funkční Android
- Pokračování CyanogenMod
- Podpora stovek zařízení

https://lineageos.org/

---
layout: center
---
# Jak nemít Google Play Services

<div v-click class="text-xl p-2">
Se s tim smiř!
</div>

<div v-click class="text-xl p-2">
microG - https://microg.org/
</div>

---
layout: image-right
image: https://e.foundation/wp-content/uploads/2019/11/home-main-phone-700x629.png
---
# /e/OS

- Plně hostovaný řešení od https://murena.com/
- LineageOS + microG + Nextcloud a email

 https://e.foundation/

---
layout: image
image: ./byebye.gif
---
# Díky za pozornost.

---
