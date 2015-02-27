---
layout: post
title: "aDock Step by Step (video tutorial)"
date:   2015-02-19 17.54
---

This screencast is meant to be a tutorial for aDock.

In this video we are connected via SSH to two servers and we run a simulation against both of them.  
The first server deploys a 'vanilla' version of OpenStack.  
The second one hosts [`nova-consolidator`](https://blueprints.launchpad.net/nova/+spec/nova-consolidator).  
The simulation is 50 steps long and run against a 1+20 architecture.  
Eventually, we provide a taste of how simulation data is displayed in real-time on _Polyphemus_.

The aDock deploy is divided in 6 phases:

1. Start controller node on both servers;
2. Start 20 compute nodes on both servers;
3. Start _Oscard_ on both servers (different `oscard.conf` files);
4. Start _Polyphemus_ on the first server (it could also happen on your laptop);
5. Run simulation from the first server (it could also happen from your laptop);
6. Open your browser and enjoy!

Here is the screencast:

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/_22WaEyaIkw"></iframe>
</div>