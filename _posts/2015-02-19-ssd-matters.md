---
layout: post
title: "Deploy aDock on Laptops - SSD Matters"
date:   2015-02-19 10.42
---

In this post, we will try to understand if it is possible for a researcher/developer to deploy and test _OpenStack_ code on his/her laptop.
To do this, we will try to deploy an _aDock_ environment on two different laptops.

We will leave _Google Chrome_ (our favorite web browser) and _Sublime Text_ (our favorite text editor) open to keep things more realistic. In fact, we assume that a researcher/developer won't use a clean server edition of his OS while developing.

Our goal is to deploy a 1+5 configuration (one controller node and five compute nodes), which we think it's suitable configuration for testing purposes.  
Our experiment went through 7 states:

1. Clean (_Google Chrome_ plus _Sublime Text_);
2. Ctrl (controller node is up);
3. 1plus1 (one controller and one compute node);
4. 1plus2 (one controller and two compute nodes);
5. 1plus3 (...);
6. 1plus4 (...);
7. 1plus5 (...).

We succeeded in deploying a 1+5 configuration on both laptops, maintaining a usable environment.  
With the term 'usable' we mean that the user can still work on his/her text editor, web browser and _aDock_ itself, and so he/she can go on developing, browsing and run simulations with _Oscard_.

For each step we recorded _CPU usage_, _RAM usage_, _SWAP usage_ and the required time to run the next _aDock_ container in that state.

Here are the results:

## __Samsung SERIES 5 ULTRA__
_CPU: Intel Core i5 1.6 GHz_  
_RAM: 4GB_  
_SWAP: 4GB_  
_SSD: no_  
_OS: Linux Mint 3.13.0-24-generic XFCE_  

<div class="table-wrapper">
  <table class="table table-striped">
    <thead>
      <tr>
        <th class="text-center">State</th>
        <th class="text-center">Time (s)</th>
        <th class="text-center">CPU (%)</th>
        <th class="text-center">RAM (%)</th>
        <th class="text-center">SWAP (%)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>clean</td>
        <td class="text-center">1736</td>
        <td class="text-center">12.34</td>
        <td class="text-center">52.052</td>
        <td class="text-center">7.779</td>
      </tr>
      <tr>
        <td>ctrl</td>
        <td class="text-center">898</td>
        <td class="text-center">12.495</td>
        <td class="text-center">95.954</td>
        <td class="text-center">9.809</td>
      </tr>
      <tr>
        <td>1plus1</td>
        <td class="text-center">923</td>
        <td class="text-center">12.77</td>
        <td class="text-center">96.909</td>
        <td class="text-center">19.235</td>
      </tr>
      <tr>
        <td>1plus2</td>
        <td class="text-center">934</td>
        <td class="text-center">13.14</td>
        <td class="text-center">96.528</td>
        <td class="text-center">29.861</td>
      </tr>
      <tr>
        <td>1plus3</td>
        <td class="text-center">976</td>
        <td class="text-center">13.52</td>
        <td class="text-center">96.048</td>
        <td class="text-center">38.053</td>
        </tr>
      <tr>
        <td>1plus4</td>
        <td class="text-center">1104</td>
        <td class="text-center">13.79</td>
        <td class="text-center">96.453</td>
        <td class="text-center">43.665</td>
      </tr>
      <tr>
        <td>1plus5</td>
        <td class="text-center">---</td>
        <td class="text-center">14.02</td>
        <td class="text-center">96.325</td>
        <td class="text-center">51.496</td>
      </tr>
    </tbody>
  </table>
</div>


## __Apple MacBook Pro (Early 2011)__  
_CPU: Intel Core i5 2.3 GHz_  
_RAM: 8GB_  
_SWAP: dynamically allocated_  
_SSD: yes_  
_OS: Mac Os X Yosemite_  

SWAP memory is in MB, because it is dynamically allocated and we don't know its total.

<div class="table-wrapper">
  <table class="table table-striped">
    <thead>
      <tr>
        <th class="text-center">State</th>
        <th class="text-center">Time (s)</th>
        <th class="text-center">CPU (%)</th>
        <th class="text-center">RAM (%)</th>
        <th class="text-center">SWAP (MB)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>clean</td>
        <td class="text-center">466</td>
        <td class="text-center">3.05</td>
        <td class="text-center">93.63</td>
        <td class="text-center">55.5</td>
      </tr>
      <tr>
        <td>ctrl</td>
        <td class="text-center">242</td>
        <td class="text-center">9.76</td>
        <td class="text-center">99.38</td>
        <td class="text-center">93.8</td>
      </tr>
      <tr>
        <td>1plus1</td>
        <td class="text-center">255</td>
        <td class="text-center">12.78</td>
        <td class="text-center">99.75</td>
        <td class="text-center">93.8</td>
      </tr>
      <tr>
        <td>1plus2</td>
        <td class="text-center">255</td>
        <td class="text-center">14.94</td>
        <td class="text-center">99.75</td>
        <td class="text-center">93.8</td>
      </tr>
      <tr>
        <td>1plus3</td>
        <td class="text-center">257</td>
        <td class="text-center">15.91</td>
        <td class="text-center">99.75</td>
        <td class="text-center">93.8</td>
        </tr>
      <tr>
        <td>1plus4</td>
        <td class="text-center">288</td>
        <td class="text-center">16.79</td>
        <td class="text-center">99.75</td>
        <td class="text-center">93.8</td>
      </tr>
      <tr>
        <td>1plus5</td>
        <td class="text-center">304</td>
        <td class="text-center">18.01</td>
        <td class="text-center">99.75</td>
        <td class="text-center">93.8</td>
      </tr>
    </tbody>
  </table>
</div>

In the first case, we can see that there is little dependence among CPU usage, startup time and number of containers. RAM usage and SWAP are strictly correlated, instead. We understand that running a containers is mostly a memory intensive task. 
In the second case, we see CPU usage grow significantly and RAM and SWAP stay unchanged. Our opinion is that Mac OS is too opaque to understand if something was happening underneath.  
Reading data we have to keep in mind that _Docker_ stores images on disk. So, it is not surprising to see that _MacBook_ is almost 4 times faster than _Samsung_. SSD heavily beats HD, even when we come to use the SWAP.

In both cases we achieved a 1+5 configuration with still usable laptops and reasonable containers startup times.